<template>
   <div @click="geturl" >
     <div class="songname">
       <p>{{searchitem.name}}</p>
     </div>
      <div class="info">
      <span>{{searchitem.artists[0].name}}</span>   
      <span>-{{searchitem.album.name}}</span></div>
   </div>
</template>

<script>
import {getmusicurl} from '../../../network/musicrecom'
export default {
  props:{
    searchitem:{
      type:Object,
      default(){      
        return {}
      }
    }
  },
  data(){
      return{
        id:null,
        musicurl:null
      }
  },
  methods:{
geturl(){
  new Promise((resolver,reject)=>{
    getmusicurl(this.searchitem.id).then(res=>{
      this.musicurl=res.data.data[0].url
      resolver(this.musicurl)  
    })
  }).then(res=>{
     this.$play.music={
            title: this.searchitem.name,
            author: this.searchitem.artists[0].name,
            url: res,
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
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

<style>
.info{
  font-size: 12px;
  color: #888;
}
.songname{
  margin-top: 8px;
}
</style>