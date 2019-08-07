<template>
   <div @click="geturl">
       <div class="rankindex">{{rank+1}}</div>
       <div class="playimg"><img src="../assets/logo.jpg" alt=""></div>
      <div class="listname"><p>{{getdetaillist.name}}</p></div>
       <div class="arname"><p>{{getdetaillist.ar[0].name}}</p></div>
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

<style>
.rankindex{
    margin-left: 10px;
}
.listname{
    margin-left: 20px;
    overflow: hidden;
}

.playimg img{
    height: 25px;
    width: 25px;
    margin-top: 8px;
    margin-left: 16px;
}
.arname{
  margin-left: 16px; 
}
</style>
