import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Hotsong=()=>import('./views/hotsong/Hotsong.vue')
const Search=()=>import('./views/search/Search.vue')
const Musicrecom=()=>import('./views/musicrecom/Musicrecom.vue')
const Playmusic=()=>import('./views/play/play.vue')
const Showsearch=()=>import('./views/search/childcom/showitem.vue')
const Playlist=()=>import('./components/getdetails.vue')
const routes=[
  {
    path:'',
    redirect:'/musicrecom'
  },
  {
    path:'/hotsong',
    component:Hotsong
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/musicrecom',
    component:Musicrecom
  },
  {
    path:'/playmusic',
    component:Playmusic
  },
   {
    path:'/showitem',
    component:Showsearch
  },
  {
    path:'/playlist',
    component:Playlist
  }
]
export default new Router({
  routes,
  mode:'history'
})
