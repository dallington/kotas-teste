<template>
  <TheHeader class="hidden md:block" />
  <main>
    <Home />
  </main>
  <footer></footer>
</template>

<script setup>
import TheHeader from '@components/layout/TheHeader.vue'
import Home from '@/views/Home.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
@import '@assets/scss/app';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f4f5;
}
</style>
