<template>
  <div id="app">
    <router-link to="/products">Products</router-link>
    <router-link to="/card">Card</router-link>
      <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
