<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span 
      class="close" 
      v-if="closeButton" 
      @click="onClickClose"
      v-html="closeButton.text"
      ></span>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autlCloseDelay: {
      type: Number,
      default: 20
    },
    closeButton: {
      type: Object,
      default: () => {
        // 需要以函数的形式返回Object类型，因为不然的话会出现重复指向
        return {
          // 用匿名函数的形式创建返回，每次都是新的
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autlCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove(); //
      this.$destroy(); // destroy不会删除页面元素
    },
    log(){
      console.log('测试');
      
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); // this === toast实例
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.5);
$toast-color: #fff;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: $toast-color;
  padding: 0 16px;
}
.close {
  padding-left: 16px;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>
