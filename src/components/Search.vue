<template>
  <form class="search-area" @submit.prevent="handleSearch">
      <input type="text" v-model="searchValue" :placeholder="placeholder">
      <div class="icon" @click="handleSearch">
          <Icon type="search"></Icon>
      </div>      
  </form>
</template>

<script>
import Icon from "./Icon.vue"
export default {
    components: {
        Icon,
    },
    props: {
        placeholder: {
            type: String,
            default: "搜索关键字"
        }
    },
    data() {
        return {
            searchValue: "",
        }
    },
    methods: {
        handleSearch() {
            if(this.searchValue){
                this.$emit("search",this.searchValue);
            }
            
        }
    }
}
</script>

<style scoped>
    .search-area {
        position: relative;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid #c0c0c0;
        border-radius: 5px;
    }
    .search-area input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 8px;
        padding-right: 46px;
    }

    .search-area input::placeholder {
        color:#666;
    }
    .icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 100%;
        /* background-color: #e0e0e0; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>