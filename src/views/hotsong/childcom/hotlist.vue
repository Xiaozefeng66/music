<template>
   <div>
       <hotlistiem v-for="(item,index) in tracks"
       :key="index" 
       :listitem="item"
       :rank="index">
       </hotlistiem>
   </div>
</template>

<script>
import {gettoplist} from '../../../network/musicrecom'
import hotlistiem from './hotlistitem'
export default {
    components:{
        hotlistiem
    },
    data(){
        return{
        tracks:null
        }
    },
  created(){
      gettoplist().then(res=>{  
          this.tracks=res.data.playlist.tracks.slice(0,100)
      })
  }
}
</script>

<style>

</style>
