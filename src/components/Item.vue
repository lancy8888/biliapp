<template>
  <div class="item" :class="{ active: isActive}" @click="handleClick">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            //required: true,
            default:false
        }
    },
    methods: {
        handleClick(){
            this.$emit("active",123);
        }
    }
}
</script>

<style scoped>
.item{
    cursor: pointer;
    width:100%;
    height: 100%;
    transition:.3s;
}
.item:hover{
    background-color: #da8686;
}
.active{
    background-color: #e7e7e7;
}
</style>
