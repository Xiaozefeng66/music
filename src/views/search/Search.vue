<template>
   <div class="searchmusic">
       <div class="search">
            <input type="text" class="search-input" placeholder='搜索歌曲、歌手、专辑' v-model="search">
            <button @click="searchclick" class="btn"><img src="../../assets/search.svg" alt="" class="btnimg"></button>  
       </div>
       <div class="searchhot clear">
           <p class="ren">热门搜索</p>
         
           <hotsearch v-for="(item,index) of hotsearch" :key="index" class="hotitem"
           :hotsearchs='item'>
           </hotsearch>
       </div>
   </div>
</template>

<script>
import {getsearchhot,searchmusic} from '../../network/musicrecom'
import hotsearch from './hotsearch'
export default {
    data(){
        return{
            hotsearch:null,
            search:null,
            searchAll:null
        }
    },
    methods:{
           searchclick(){
               new Promise((resolve,reject)=>{
               searchmusic(this.search).then(res=>{  
               this.searchAll=res.data.result.songs
                resolve(this.searchAll)
     })
               }).then(res=>{
       this.$router.push({
         path:'/showitem',
         query:{
             name:this.search
         }
         
     })
               })
   }
    },
    components:{
        hotsearch
    },
  created(){
    getsearchhot().then(res=>{     
        this.hotsearch=res.data.result.hots
    })
  }
}
</script>

<style>
.btn{
    position: absolute;
    right: 30px;
    top: 3px;
    border: none;
}
.btnimg{
    width: 20px;
    height: 20px; 
}
.ren{
    margin-left: 20px;
       

}
.search{
    width: 100%;
    margin: 15px auto;
    margin-top: 25px;
    position: relative;
}
    input{
        border: none;
    }
    .search-input:focus{
        outline: none
 }
    .search-input{
       padding-left: 20px;
       width: 90%;
       background: rgb(235, 236, 236);
       height: 28px;
       border-radius: 14px;
       overflow: hidden;
       margin-left: 20px;
       box-sizing: border-box;
    }
    .hotitem{
        float: left;
    }
    .clear::after{
    content: '';
    display: block;
    clear: both;
}
</style>
