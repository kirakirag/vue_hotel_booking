<template>
  <div id="app">
    <AlwaysNavbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import AlwaysNavbar from './components/AlwaysNavbar.vue'

export default {
  name: 'App',
  components: {
    AlwaysNavbar
  }
}
</script>
