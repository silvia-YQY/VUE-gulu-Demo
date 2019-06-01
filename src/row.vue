<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  created(){    
    console.log('created');
    // created的时候是没有儿子    
  },
  mounted(){
    console.log('mounted',this.gutter);
    // 在row挂载后，给所有子元素传gutter值
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  }
};
</script>

<style lang="scss" scoped>
.row{
  display: flex;
}
</style>

