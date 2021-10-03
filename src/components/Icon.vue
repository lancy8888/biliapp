<template>
  <i class="iconfont" :class="[iconClass,extraClass]"></i>
</template>

<script>
var map = {
    arrowUp: "icon-xiangshangzhanhang",
    arrowDown: "icon-xiangxiazhanhang",
    search: "icon-search"
}
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        extraClass: {
            type: String,
            default: "",
        }
    },
    computed: {
        iconClass() {
            return map[this.type]
        }
    }
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2002770_iw7rmg1xezl.css";
   
</style>