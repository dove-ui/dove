<template>
  <div class="page-container">
    <div class="wellcome">
      <img alt="Vue logo" src="../assets/logo.png" class="logo" />
      <h1 class="title">A Vue UI Toolkit for Web</h1>
      <ul class="links" style="margin-top: 50px">
        <li><a class="link" :href="$root.pkg.repository.url.replace('git+', '')"><d-button style="width:120px;">Github</d-button></a></li>
        <li><a class="link" href="/docs"><DButton style="width:120px;" type="white">Docs</DButton></a></li>
      </ul>
    </div>
    <div class="page-content" style="margin-top: 150px">
      <site-footer class="text-center" />
    </div>
  </div>
</template>
<script>
import SiteFooter from '../components/site-footer'

export default {
  components: { SiteFooter }
}
</script>