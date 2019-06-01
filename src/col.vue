<template>
  <div class="col" 
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
    :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    >
    <div>
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data(){
    return{
      gutter: 0
    }
  },
  created(){    
    console.log('col created');
    // created的时候是没有儿子    
  },
  mounted(){
    console.log('col mounted',this.gutter);
  }
};
</script>


<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
   
  div{
    border: 1px solid red; 
    background: grey;    
  }

  $class-prefix: col-; // 前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $class-prefix: offset-; // 前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
