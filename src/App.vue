<template>
  <div style="width:300px;">
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>
        发现频道
      </template>
      <template v-slot:icon>
        >>
      </template>
    </TitleMenu>

    <ChannelList :columns="2" :activeId="activeId" @active="activeId = $event"></ChannelList>

    

    <Item 
    :isActive="curActive === 'dongman'" 
    @active="curActive = 'dongman'">
      动漫
    </Item>
    <Item :isActive="curActive === 'dianjing'" @active="curActive = 'dianjing'">
      电竞
    </Item>
  </div>
</template>


<script>
import Item from "./components/Item.vue"
import TitleMenu from "./components/TitleMenu.vue"
import Channel from "./components/Channel.vue"
import ChannelList from "./components/ChannelList.vue"
export default {
  components:{
    Item,
    TitleMenu,
    Channel,
    ChannelList,
    
  },
  data(){
    return{
      activeId: 100,
      select: false,
      curActive: "dongman"
    }
  }
}
</script>