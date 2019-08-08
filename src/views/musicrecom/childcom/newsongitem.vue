<template>
   <div class="newsongitem" @click="playmusic">
       
           <span>{{songitem.name}}</span>
           <span class="play">
          <img src="../../../assets/logo.jpg" alt="">
       </span>
           <div class="name">
              <span>{{songitem.song.artists[0].name}}</span> 
              <span>-{{songitem.song.album.name}}</span>
           </div>           
       
   </div>
</template>

<script>
import {getmusicurl} from '../../../network/musicrecom'
export default {
  props:{
      songitem:{
          type:Object,
          default(){
              return {
                 songimg:null
              }
          }
      }
  },
  
  methods:{
      playmusic(){
           new Promise((resolve,reject)=>{
               getmusicurl(this.songitem.id).then(res=>{ 
                 
   this.songimg=this.songitem.song.album.picUrl
          this.songurl=res.data.data[0].url
          resolve(this.songurl)
          
      })
           }).then(res=>{
               this.$play.music={
            title: this.songitem.name,
            author: this.songitem.song.artists[0].name,
            url: res,
            cover: this.songimg,
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
               }
                 this.$router.push({
             path:'/playmusic',
             query:{
                  id:this.songitem.id
             }
          })
           })
           
            
            
        
        
      }
  }
}

</script>

<style scoped>
.newsongitem{
   position: relative;
}
.newsongitem .name{
font-size: 12px;
color: #888888;
}
.newsongitem .play{
   display: block;
   width: 42px;
   height: 54px;
   position: absolute;
   right: 0;
   top: 0;
   line-height: 54px;
}
.newsongitem .play img{
   width: 22px;
   height: 22px;
}
</style>
