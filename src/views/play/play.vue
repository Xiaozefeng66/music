<template>
   <div>    
       <img alt="" :src="this.$play.music.cover" class="image" id="img"> 
       <aplayer autoplay :music="this.$play.music" :lrcType="3" @play="rotate" @pause="pause" />   
   </div>
</template>
<script>
import aplayer from 'vue-aplayer'
import {getmusicurl} from '../../network/musicrecom'
export default {
  data(){
      return{
          id:this.$route.query.id,
          InterVal: '',    	
      }
  },
 components:{
  aplayer,
 },
  beforeRouteLeave(to, from, next) {
  	clearInterval(this.InterVal);
  	next();
  },
  methods:{    
  	pause(){
  		clearInterval(this.InterVal)
      },
      //图片旋转
      rotate() {
  		var rotateVal=0
		this.InterVal = setInterval(function() {
		var img = document.getElementById('img')
		rotateVal += 1
		img.style.transform = 'rotate(' + rotateVal + 'deg)'
		img.style.transition = '0.1s linear'
	}, 100)
	}
}
}
</script>

<style>
.image{
    width: 100%;
	border-radius: 50%;
	cursor: pointer;
}
</style>
