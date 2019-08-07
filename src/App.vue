<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view class="rv"/>
  </div>
</template>
<script>
import TabBar from './components/tabbar/TabBar'
export default {
  components:{
TabBar
  },
  methods:{
   
  }
}
</script>
<style>
@import './assets/css/index.css';
.rv{
  margin-top: 65px;
}
</style>
