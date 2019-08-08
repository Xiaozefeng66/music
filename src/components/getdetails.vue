<template>
   <div>
       <div class="sheet">
           <div class="sheetimg"><img :src="img" alt=""></div>
           <div class="sheetname"><p>{{name}}</p></div>
       </div>
       <div class="songlist">歌曲列表</div>
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
            songlist:null,
            img:this.$route.query.img,
            name:this.$route.query.name
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

<style scoped>
.sheet{
    display: flex;
}
.sheetname{
    font-size: 17px;
    font-weight: bold;
    margin-left: 16px;
}
.sheetimg{
   margin-left: 12px;
}
.sheetimg img{
width: 126px;
height: 126px;
}
.songlist{
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
    margin-bottom: 10px;
}
</style>
