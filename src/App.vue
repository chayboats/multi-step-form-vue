<template>
  <div class="app">
    <div class="main">
      <SidebarMobile />
      <Forms></Forms>
    </div>
  </div>
</template>

<script setup>
import SidebarMobile from './components/SidebarMobile.vue';
import Forms from './components/Forms/index.vue';
</script>

<style scoped>
.main {
  display: grid;
  font-family: 'ubuntu-regular';
}
</style>
