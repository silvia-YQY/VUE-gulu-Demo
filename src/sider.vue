<template>
  <transition name="slide" :leave="leave" :enter="enter">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true
    };
  },
  methods: {
    hide() {
      this.visible = !this.visible;
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      el.marginLeft = '-200px'
      done();
    },
    leave: function(el, done) {
      el.marginLeft = '-200px'
      done();
    }
  }
};
</script>


<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 2s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
</style>

