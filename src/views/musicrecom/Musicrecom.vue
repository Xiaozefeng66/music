<template>
   <div >
     <Recsonglist></Recsonglist>
     <Newsong></Newsong>
     
   </div>
</template>

<script>
import Recsonglist from './childcom/Recsonglist'
import Newsong from './childcom/Newsong'
import scroll from '../../components/scroll/scroll'
export default {
  components:{
      Newsong,
      Recsonglist,
      scroll
  },
  
  
}
</script>

<style scoped>

</style>
