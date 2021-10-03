<template>
  <div class="channel-search">
      <Search @search="handleSearch" placeholder="搜索频道"></Search>
  </div>
</template>

<script>
import Search from "./Search.vue"
export default {
    components: {
        Search,
    },   
    methods: {
        handleSearch(e) {        
        // this.$emit("search",e)
        console.log(e);
    }
  }
}
</script>

<style scoped>
    .channel-search {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
    }
</style>