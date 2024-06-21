<template>
  <div class="app">
    <div class="main">
      <SidebarMobile />
      <div
        v-auto-animate
        class="content"
      >
        <Personal
          v-if="currentStep === 0"
          :personal-data="personalData"
          @submit="nextStep"
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
        <AddOn
          v-else-if="currentStep === 2"
          :is-monthly="isMonthly"
          @set-add-ons="setAddOns"
          :data="addOns"
        ></AddOn>
        <Finishing v-else-if="currentStep === 3"></Finishing>
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
const addOns = ref({ service: false, storage: false, profile: false });

function nextStep() {
  currentStep.value++;
}
function previousStep() {
  currentStep.value--;
}

function setPlan(id) {
  plan.value = id;
}
function setAddOns(selected) {
  addOns.value[selected] = !addOns.value[selected];
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
