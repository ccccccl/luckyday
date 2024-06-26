
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// import router from './router/router'
import store from './store'


Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
  ...App,
  // router,
  store,
  render: (h) => h(App),
})


app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif