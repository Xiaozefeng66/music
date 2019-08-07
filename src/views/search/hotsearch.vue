<template>
<div class="searchitem">
    <div >
       <p class="items">{{hotsearchs.first}}</p>
   </div>
</div>
   
</template>

<script>
export default {
  props:{
      hotsearchs:{
          type:Object,
          default(){
              return{}
          }
      }
  }
}
</script>

<style>
.searchitem{
    margin-top: 20px;
}
.searchitem .items{
    float: left;
    border: 1px solid rgb(235, 236, 236);
    padding: 10px;
    border-radius: 15px;
    margin-left: 10px;
    font-size: 14px;
}
.clear::after{
    content: '';
    display: block;
    clear: both;
}
</style>
