<template>
    <div>
        <div class="channel-list" :style="{
            height: `${height}px`,
        }">
            <div v-for="item in channels" :key="item.id" class="item" :style="{
                width: `${100/columns}%`
            }">
                <Channel @active="$emit('active',item.id)" :isActive="item.id === activeId" :data="item"></Channel>
            </div>
        </div>

        <div class="collapse" @click="isExpand = !isExpand">
            <span>{{ isExpand ? "折叠":"展开"}}</span>
            <i class="iconfont" :class="isExpand ? 'icon-xiangshangzhanhang':'icon-xiangxiazhanhang'"></i>
        </div>
    </div>  

</template>

<script>
import Channel from "./Channel.vue"
import channelServ from "../services/channel"
export default {
    components: {
        Channel,
    },
    // props: ["activeId"],
    props: {
        activeId: {
            type:Number,
            required: true,
        },
        columns: {
            type: Number,
            default: 2,
        }
    },
    data() {
        return {
            channels: [],
            isExpand: true,
        }
    },
    computed: {
        height() {
            var rows = 3;
            if(this.isExpand){
                rows = Math.ceil(this.channels.length / this.columns);                
            }
            return rows * 40;
        }
    },
    async created() {
        var datas = await channelServ.getChannels();
        // this.channels = datas.filter(function(item){
        //     if(item.name !== '热门'){
        //         return true;
        //     }
        //     return false;
        // });     
        
        this.channels = datas.filter((item) => item.name !== '热门');
    },
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2002770_0bvfck2jqoxh.css";
    .channel-list {
        overflow: hidden;
        transition: .3s;
    }
    .item {
        float: left;
        width: 50%;
    }
    .collapse {
        clear: both;
        height: 40px;
        line-height: 40px;
        color: #999;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        border-bottom: 1px solid #e7e7e7;
    }

    .iconfont {
        font-size: 12px;
        margin-left: 5px;
    }

</style>