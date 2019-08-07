import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import play from './play.js'
Vue.config.productionTip = false
// Vue.use(APlayer, {
//   defaultCover: 'https://github.com/u3u.png',
//   productionTip: true,
// });
Vue.prototype.$play=play
Vue.prototype.$EventBus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


 