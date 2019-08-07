<template>
   <div>
       <searchitem 
       v-for="(item,index) of searchitem" :key="index"
       :searchitem="item" class="searchlist"></searchitem>
   </div>
</template>

<script>
import searchitem from './searchitem'
import {searchmusic} from '../../../network/musicrecom'
export default {
    data(){
        return{
            searchitem:null
        }
    },
  components:{
      searchitem,
  },
  created(){
searchmusic(this.$route.query.name).then(res=>{  
               this.searchitem=res.data.result.songs
     })

  },

}
</script>

<style>
.searchlist{
  height: 55px;
  border-top: 1px solid rgba(0, 0, 0, 0.1)
}
</style>
