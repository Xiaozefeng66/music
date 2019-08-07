<template>
   <div>
       <p class="title">最新音乐</p>
        <newsongitem v-for="(item, index) in newsongitem" :key="index"
        :songitem="item" class="songline" >
        </newsongitem>
   </div>
</template>

<script>
import newsongitem from './newsongitem';
import {getnewsong} from '../../../network/musicrecom'
export default {
  components:{
      newsongitem
  },
  created(){
      getnewsong().then(res=>{
        //   console.log(res.data.result)
this.newsongitem=res.data.result
      })
  },
 
  data(){
      return {
          newsongitem:null,


      }
  }
}
</script>

<style>
.title{
    margin-bottom: 20px;
}
.songline{
  padding: 4px 0;
 border-bottom: 1px solid rgba(0, 0 , 0, 0.1);
}
</style>
