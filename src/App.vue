<template>
  <Stack class="app">
    <SidebarMobile />

    <Row class="steps">
      <div
        class="number-circle"
        v-for="step in [...Array(4).keys()]"
        :key="step + 1"
      >
        <span>{{ step + 1 }}</span>
      </div>
    </Row>

    <div class="main">
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
        @next="nextStep"
        @back="previousStep"
        :data="addOns"
      ></AddOn>
      <Finishing
        v-else-if="currentStep === 3"
        :is-monthly="isMonthly"
        :plan="plan"
        :add-ons="addOns"
        @change="startOver"
        @back="previousStep"
        @confirm="nextStep"
      ></Finishing>
      <ThankYou v-else />
    </div>
  </Stack>
</template>

<script setup>
import { SidebarMobile, Row, Stack } from '@/components';
import { Personal, Plan, AddOn, Finishing, ThankYou } from '@/pages';
import { ref } from 'vue';

const currentStep = ref(0);
const personalData = ref({ name: null, email: null, phone: null });
const isMonthly = ref(true);
const plan = ref(null);
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

function startOver() {
  currentStep.value = 1;
}
</script>

<style scoped>
.app {
  font-family: 'ubuntu-regular';
  height: 100vh;
  align-items: center;
}
.steps {
  padding: 2rem;
  gap: 1rem;
}

.number-circle {
  border: 1px solid white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.main {
  height: 100%;
  padding: 1rem;
}
</style>
@/components/Pages @/Pages@/pages
