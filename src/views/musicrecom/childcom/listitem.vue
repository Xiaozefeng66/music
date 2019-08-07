<template>
   <div class="listitem" @click="getid">
       <img :src="listitem.picUrl" alt="">
       <p>{{listitem.name}}</p>
       <!-- <img src="" alt="">
       <span></span> -->
   </div>
</template>

<script>
export default {
  props:{
     listitem:{
         type:Object,
      default(){
          return {}
      }
     } 
  },
  methods:{
      getid(){
         
              this.$router.push({
                  path:'/playlist',
                  query:{
                      id:this.listitem.id
                  }
              })
        
         
      }
  }
}
</script>

<style>
.listitem{
    margin: 20px 0;
    width: 33%;
}
.listitem img{
width: 100%;
}
.listitem p{
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
