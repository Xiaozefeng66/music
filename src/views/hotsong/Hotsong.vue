<template>
   <div>
     
        <banner></banner>
       <hotlist></hotlist>
    
   </div>
</template>

<script>
import Banner from './childcom/banner'
import hotlist from './childcom/hotlist'
import scroll from '../../components/scroll/scroll'
export default {
  components:{
      Banner,
      hotlist,
      scroll
  }
}
</script>

<style>

</style>
