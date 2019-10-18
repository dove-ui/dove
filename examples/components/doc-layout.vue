<template>
  <div class="page-container">
    <div class="docs-layout">
      <div class="docs-sidebar clearfix">
        <div class="header">
          <span class="tag">v{{$root.pkg.version}}</span>
        </div>
        <DocNav :menus="menus" class="navs-box"/>
      </div>
      <div class="docs-container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import DocNav from './doc-nav'
import DocsNavs from '../routes/docs'

export default {
  components: { DocNav },
  data () {
    return {
      menus: [
        ...DocsNavs,
        // {
        //   label: '组件',
        //   groupTitle: 'Basic',
        //   children: [
        //     { path: '/docs/button', label: 'Button 按钮' },
        //     { path: '/docs/button', label: 'Button 按钮' },
        //     { path: '/docs/button', label: 'Button 按钮' },
        //     { path: '/docs/button', label: 'Button 按钮' }
        //   ]
        // },
        { type: 'line' },
        { path: this.$root.repository, link: true, label: 'Github' }
      ]
    }
  }
}
</script>
