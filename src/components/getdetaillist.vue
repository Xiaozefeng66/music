<template>
   <div @click="geturl" class="detaillist">
        <span class="rank">{{rank+1}}</span>
      <div class="songinfo"> 
          <span class="songname">{{getdetaillist.name}}</span>
          <div class="name">
           <span>{{getdetaillist.ar[0].name}}</span>
       </div>
      </div>
          <div class="playimg"><img src="../assets/logo.jpg" alt=""></div>
   </div>
</template>

<script>
import {getmusicurl} from '../network/musicrecom'


export default {
    data(){
        return{
            songname:null,
            songimg:null
        }
    },
  props:{
      getdetaillist:{
          type:Object,
          default(){
              return {}
          }
      },
      rank:{
          type:Number,
          default :0
      }
  },
  methods:{
      geturl(){
          new Promise((resolve,reject)=>{
              getmusicurl(this.getdetaillist.id).then(res=>{
                  this.songimg=this.getdetaillist.al.picUrl
                  resolve(res.data.data[0].url)
                    console.log( this.getdetaillist.ar)
              })
          }).then(res=>{
              this.$play.music={
            title: this.getdetaillist.name,
            author:this.getdetaillist.ar[0].name,
            url: res,
            cover: this.songimg, // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
               }
                 this.$router.push({
             path:'/playmusic',
             query:{
                  id:this.getdetaillist.id
             }
          })
          })
          
        
      }
  }
}
</script>

<style scoped>

.detaillist{
    position: relative;
    height: 55px;
}
.detaillist .name{
    font-size: 12px;
color: #888888;
}
.detaillist .rank{
    width: 44px;
    height: 55px;
    display: inline-block;
    line-height: 55px;
    text-align: center;
   color: #999
}
.detaillist .songinfo{
     height: 55px;
    display: inline-block;
}
.playimg{
   position: absolute;
   right: 15px;
   top: 0;
}
.playimg img{
    height: 25px;
    width: 25px;
    margin-top: 8px;
    margin-left: 16px;
}
</style>
