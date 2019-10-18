import Vue from 'vue'
import DemoBlock from 'vue-dotmd-loader/dist'
import router from './routes'
import App from './App.vue'
import DoveUI from '../src'
import "vue-dotmd-loader/dist/css/default.css"
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import 'vue-dotmd-loader/src/docs.css'
import './assets/main.less'
import pkg from '../package.json'

Vue.use(DemoBlock)
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
