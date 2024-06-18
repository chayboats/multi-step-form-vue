<template>
  <div class="app">
    <div class="main">
      <SidebarMobile />
      <div
        v-auto-animate
        class="content"
      >
        <form
          @submit.prevent
          v-auto-animate
          v-if="currentStep < 4"
        >
          <Personal
            v-if="currentStep === 0"
            :personal-data="personalData"
            @next="nextStep"
          ></Personal>
          <Plan
            v-else-if="currentStep === 1"
            :is-monthly="isMonthly"
            @toggle-billing-frequency="isMonthly = !isMonthly"
            @next="nextStep"
            @back="previousStep"
            @select-plan="setPlan"
            :plan="plan"
          ></Plan>
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

const currentStep = ref(0);
const personalData = ref({ name: null, email: null, phone: null });
const isMonthly = ref(true);
const plan = ref('');

function nextStep() {
  currentStep.value = currentStep.value + 1;
}
function previousStep() {
  currentStep.value = currentStep.value - 1;
}

function setPlan(id) {
  plan.value = id;
}
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
