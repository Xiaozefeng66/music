<template>
   <div class="content" ref="wrapper">
       <div>
           <slot></slot>
       </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import { deflate } from 'zlib';
export default {
    props:{
    probeType:{
        type:Number,
        default:0
        
    }
    },
  data(){
      return{
          BScroll:null,
           message:123
      }
  },
  methods:{
      backtop(x,y,time){
          this.BScroll.scrollTo(x,y,time)
      },
     refresh(){
          this.BScroll.refresh()
      },
      
  },
    mounted(){
        this.BScroll=new BScroll( this.$refs.wrapper,{
            click:true,
            probeType:this.probeType
        })
        this.BScroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
            
        })
    }
    
}
</script>

<style>

</style>
