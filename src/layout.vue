<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    // 判断是否有sider，有就加上hasSider的class
    this.$children.forEach(vm => {
      if (vm.$options.name === "GuluSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>


<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;  // 若有sider，就变为竖形
  }
}
</style>

