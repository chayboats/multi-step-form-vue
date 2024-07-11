<template>
  <div class="app">
    <SidebarMobile v-if="!desktop" />

    <div
      :class="desktop && 'card-background'"
      class="main"
      v-auto-animate
    >
      <StepTracker :current-step="currentStep" />

      <YourInfo
        v-if="currentStep === 0"
        :personal-data="personalData"
        @submit="setPersonalData"
      ></YourInfo>

      <SelectPlan
        v-else-if="currentStep === 1"
        :is-monthly="isMonthly"
        @toggle-billing-frequency="setIsMonthly"
        @next="nextStep"
        @back="previousStep"
        @select-plan="setPlan"
        :frequency="frequency"
        :plan="plan"
      ></SelectPlan>
      <AddOns
        v-else-if="currentStep === 2"
        :frequency="frequency"
        @set-add-ons="setAddOns"
        @next="nextStep"
        @back="previousStep"
        :data="addOns"
      ></AddOns>
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
  </div>
</template>

<script setup>
import { SidebarMobile, StepTracker } from '@/components';
import { YourInfo, SelectPlan, AddOns, Confirmation, Summary } from '@/pages';
import { ref, computed } from 'vue';
import useBreakpoint from './use/useBreakpoint.js';

const { desktop } = useBreakpoint();
const currentStep = ref(getLocally('current-step', 0));
const personalData = ref(getLocally('personal-data', { name: null, email: null, phone: null }));
const isMonthly = ref(getLocally('is-monthly', true));
const plan = ref(getLocally('plan', null));
const addOns = ref(getLocally('add-ons', { service: false, storage: false, profile: false }));

const frequency = computed(() => {
  if (isMonthly.value) {
    return 'monthly';
  }
  return 'yearly';
});

function getLocally(item, value) {
  return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : value;
}

function setLocally(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
}

function nextStep() {
  currentStep.value++;
  setLocally('current-step', currentStep.value);
}

function previousStep() {
  currentStep.value--;
  setLocally('current-step', currentStep.value);
}

function startOver() {
  currentStep.value = 1;
  setLocally('current-step', currentStep.value);
}

function setPersonalData() {
  setLocally('personal-data', personalData.value);
  nextStep();
}

function setIsMonthly() {
  isMonthly.value = !isMonthly.value;
  setLocally('is-monthly', isMonthly.value);
}

function setPlan(id) {
  plan.value = id;
  setLocally('plan', plan.value);
}

function setAddOns(selected) {
  addOns.value[selected] = !addOns.value[selected];
  setLocally('add-ons', addOns.value);
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'ubuntu-regular';
  height: 100vh;
  width: 100%;
  @media (--desktop) {
    flex-direction: row;
    justify-content: center;
  }
}

.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  align-items: center;
  width: 100%;
  @media (--desktop) {
    display: grid;
    height: 37rem;
    background-color: white;
    margin: 1rem;
    border-radius: 0.75rem;
    grid-template-columns: auto 1fr;
    max-width: 60rem;
  }
}
</style>
