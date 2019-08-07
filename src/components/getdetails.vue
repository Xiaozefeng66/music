<template>
   <div>
    <getdetaillist v-for="(item,index) of songlist"
    :key="index" :getdetaillist="item" :rank='index' class="list"
    ></getdetaillist>
   </div>
</template>

<script>
import {getdetails} from '../network/musicrecom'
import getdetaillist from './getdetaillist'
export default {
    data(){
        return{
            id:this.$route.query.id,
            songlist:null
        }
    },
    components:{
        getdetaillist
    },
  created(){
      getdetails(this.id).then(res=>{
          this.songlist=res.data.playlist.tracks
          console.log(this.songlist)
      })
  },
}
</script>

<style>
.list{
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}
</style>
