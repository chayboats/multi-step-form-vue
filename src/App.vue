<template>
  <Stack class="app">
    <SidebarMobile />

    <StepTracker :current-step="currentStep" />

    <div
      class="main"
      v-auto-animate
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
        :frequency="frequency"
        :plan="plan"
      ></Plan>
      <AddOn
        v-else-if="currentStep === 2"
        :frequency="frequency"
        @set-add-ons="setAddOns"
        @next="nextStep"
        @back="previousStep"
        :data="addOns"
      ></AddOn>
      <Summary
        v-else-if="currentStep === 3"
        :plan="plan"
        :add-ons="addOns"
        :frequency="frequency"
        @change="startOver"
        @back="previousStep"
        @confirm="nextStep"
      ></Summary>
      <Confirmation v-else />
    </div>
  </Stack>
</template>

<script setup>
import { SidebarMobile, Row, Stack, StepTracker } from '@/components';
import { Personal, Plan, AddOn, Confirmation, Summary } from '@/pages';
import { ref, computed } from 'vue';

const currentStep = ref(0);
const personalData = ref({ name: null, email: null, phone: null });
const isMonthly = ref(true);
const plan = ref(null);
const addOns = ref({ service: false, storage: false, profile: false });

const frequency = computed(() => {
  if (isMonthly.value) {
    return 'monthly';
  }
  return 'yearly';
});

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

function startOver() {
  currentStep.value = 1;
}
</script>

<style scoped>
.app {
  font-family: 'ubuntu-regular';
  height: 100vh;
  align-items: center;
  width: 100%;
}

.main {
  height: 100%;
  padding: 1rem;
  align-items: center;
  width: 100%;
}
</style>
