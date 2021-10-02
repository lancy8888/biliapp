<template>
  <div class="channel">
      <item :isActive="isActive" @active="$emit('active')">                 
          <div class="inner">
            <span class="name">{{data.name}}</span>
            <span class="number">{{data.channel_count}}</span>
          </div>
      </item>
  </div>
</template>

<script>
import Item from "./Item.vue"
export default {
    props: {
        isActive: {
            type: Boolean,
            //required: true,
            default:false
        },
        data: {
            type: Object,
            // default: ()=>({}),
            default: function(){
                return {}
            }
        }
    },
    components: {
        Item,
    },
}
</script>

<style scoped>
    .channel {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .inner {
        padding: 0 20px;
    }
    .name {
        font-size: 14px;
    }

    .number {        
        font-size: 12px;
        color:#999;
        margin-left: 10px; 
    }

</style>>

</style>