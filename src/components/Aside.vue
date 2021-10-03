<template>
  <div class="aside">      
    <ChannelSearch></ChannelSearch>      
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>
        发现频道
      </template>
      <template v-slot:icon>
        >>
      </template>
    </TitleMenu>
    <ChannelList :columns="2" :activeId="activeId" @active="activeId = $event"></ChannelList>

  </div>
</template>

<script>
import ChannelSearch from "./ChannelSearch.vue"
import TitleMenu from "./TitleMenu.vue"
import ChannelList from "./ChannelList.vue"

export default {
    components: {
       ChannelSearch,
       TitleMenu,
       ChannelList, 
    },
    data(){
        return{
        activeId: 100,
        select: false,      
        }
    },
}
</script>

<style scoped>
    .aside { width: 100%; height: 100%;}
</style>