<template>
   <div class="recom">
    <p class="songsheet">推荐歌单</p>
    <div class="songlist">
    <listitem  v-for="(item,index) in listitem"
       :key="index" :listitem="item"></listitem>
    </div>
   </div>
</template>

<script>
import {getsonglist} from '../../../network/musicrecom'
import listitem from './listitem'
export default {
    data(){
        return{
            listitem:null
        }
    },
  components:{
      listitem
  },
  created(){
      getsonglist().then(res=>{
    this.listitem=res.data.result.slice(0,6)
      })  
      }
}
</script>

<style scoped>
.songsheet::before{
 content: '';
    border-left: 3px solid red;
    margin-right: 10px;  
}
.songlist{
   display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 2px;
}


</style>
