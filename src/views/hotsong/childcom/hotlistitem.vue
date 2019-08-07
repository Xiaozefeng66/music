<template>
   <div class="hotsonglist" @click="playmusic">
     <!-- <div>{{listitem.id}}</div> -->
       <div class="rank">
           <span>{{getrank}}
           </span>
           </div>
       <div>
           <p>{{listitem.name}}</p>
            <span class="hotplay">
          <img src="../../../assets/logo.jpg" alt="">
       </span>
        <div class="hotname">
         <span>{{listitem.ar[0].name}}</span>
         <span>-</span>
         <span>{{listitem.al.name}}</span>
       </div>   
           </div>
       <span></span>
   </div>
</template>

<script>
import {getmusicurl} from '../../../network/musicrecom'
export default {
  props:{
      listitem:{
          type:Object,
          default(){
              return {}
          }
      },
     rank:Number
  },
  data(){
    return{
      id:null,
     songimg:null
    }
  },
  computed:{
      getrank(){
         return (this.rank+1)<10 ? '0'+(this.rank+1):(this.rank+1)
      }
  },
  methods:{
    playmusic(){
      new Promise((resolve,reject)=>{
         getmusicurl(this.listitem.id).then(res=>{ 
          
           this.songimg=this.listitem.al.picUrl
          this.songurl=res.data.data[0].url
          resolve(this.songurl)
      })
      }).then(res=>{
        this.$play.music={
            title: this.listitem.name,
            author: this.listitem.ar[0].name,
            url: res,
            cover: this.songimg, 
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        }
          this.$router.push({
             path:'/playmusic',
             query:{
                  id:this.listitem.id
             }
          })
      })
      this.id=this.listitem.id  
    }
  }
}
</script>

<style>
.rank{
  width: 44px;
float: left;
height: 54px;
line-height: 42px;
text-align: center
}
.hotsonglist{
  height: 54px;
  position: relative;
}
p{
  margin: 0;
  padding: 0
}
.songname{
  font-size: 17px;
  color: #333;
}
.hotname{
      font-size: 12px;
    color: #888;
}
.hotsonglist .hotplay{
   display: block;
   width: 42px;
   height: 54px;
   position: absolute;
   right: 0;
   top: 0;
   line-height: 54px;
}
.hotplay img{
   width: 22px;
   height: 22px;
}
</style>
