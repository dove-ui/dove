import Vue from 'vue'
import router from './routes'
import App from './App.vue'
import DoveUI from '../src'
import './assets/main.less'
import pkg from '../package.json'

Vue.use(DoveUI)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router,
  data () {
    return { pkg }
  }
}).$mount('#app')

window.app = app
