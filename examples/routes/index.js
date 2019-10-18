import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import DocLayout from '../components/doc-layout'
import docs from './docs'

function filter (routes) {
  return routes.filter(e => {
    return e.type !== 'line' && (e.children || e.component)
  }).map(e => {

    if (!e.children) {
      const path = (typeof e.path === 'object' ? e.path.path : e.path)
      return { path: path, component: e.component }
    }

    return filter(e.children)
  })
}

const docsRoutes = [].concat.apply([], filter(docs))

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    {
      path: '/docs',
      component: DocLayout,
      docs: true, // for navs
      children: [
        ...docsRoutes
      ]
    }
  ]
})

export default router
