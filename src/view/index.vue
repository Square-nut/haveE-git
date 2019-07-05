<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <links></links>
    <footBar></footBar>
  </div>
</template>

<script>
import links from './components/links'
import Navbar from './components/nav-bar'
import footBar from './components/footer-bar'
export default {
  components: {
    Navbar,
    links,
    footBar
  }
}
</script>

<style>
</style>
