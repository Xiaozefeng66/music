<template>
   <div class="tabbaritem">
       <span v-for="(item,index) in list"
       :key="index" class="item"
       @click="itemclick(index)"
       :class="{'isactive':
           currenindex===index}">
       {{item}}
       </span>
   </div>
</template>

<script>
export default {
  data(){
      return{
          list:['推荐音乐','热歌榜','搜索'],
          currenindex:0
      }
  },
  methods:{
      itemclick(index){
         this.currenindex=index
         switch(index){
             case 0:
                 this.$router.push('/musicrecom')
             break;
             case 1:
                 this.$router.push('/hotsong')
             break;
             case 2:
                  this.$router.push('/search') 
             break;
         }
      }
  }
}
</script>

<style>
.tabbaritem{  
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    border-bottom: 1px solid gray;
      background: #fff;
}
.item{
   margin-left: 40px;
  height: 44px;
  line-height: 44px;
  text-align: center
}
.isactive{
color: red;
border-bottom: 1px solid red;
margin-bottom: -1px;
}
</style>
