<template>
  <ul class="navs">
    <!-- <li class="nav-item">
      <div class="nav-group">
        <a class="nav-title">组件</a>
        <div class="nav-group-title">Basic</div>
        <ul class="navs">
          <li class="nav-item"><a href="#" class="nav">Button 按钮</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
        </ul>
      </div>
      <div class="nav-group">
        <div class="nav-group-title">Group</div>
        <ul class="navs">
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
          <li class="nav-item"><a href="#" class="nav">Nav</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-line"></li>
    <li class="nav-item"><a href="#" class="nav">Github</a></li>
    -->
    <template v-for="(item, index) in menus">
      <li class="nav-line" :key="index" v-if="item.type === 'line'"></li>
      <li class="nav-item" :key="index" v-else-if="item.children">
        <a class="nav-title" v-if="item.label">{{item.label}}</a>
        <div class="nav-group-title" v-if="item.groupTitle">{{item.groupTitle}}</div>
        <navs :menus="item.children" />
      </li>
      <li class="nav-item" :key="index" v-else>
        <a :href="item.path" v-if="item.link" class="nav link">{{item.label}}</a>
        <router-link :to="item.path" class="nav" v-else>{{item.label}}</router-link>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  name: 'navs',
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>