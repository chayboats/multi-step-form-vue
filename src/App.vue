<template>
  <div class="app">
    <div class="main">
      <SidebarMobile />
      <div
        v-auto-animate
        class="content"
      >
        <form
          v-auto-animate
          v-if="currentStep < 4"
        >
          <Personal v-if="currentStep === 0"></Personal>
          <Plan v-else-if="currentStep === 1"></Plan>
          <AddOn v-else-if="currentStep === 2"></AddOn>
          <Finishing v-else-if="currentStep === 3"></Finishing>
        </form>
        <ThankYou v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SidebarMobile, ThankYou } from '@/components';
import { Personal, Plan, AddOn, Finishing } from '@/components/FormPages';
import { ref } from 'vue';

const currentStep = ref(4);
</script>

<style scoped>
.main {
  display: grid;
  font-family: 'ubuntu-regular';
}
.content {
  background-color: var(--color-white);
}
</style>
