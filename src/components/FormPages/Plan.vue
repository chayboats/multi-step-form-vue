<template>
  <FormContent v-auto-animate>
    <template #title>Select Your Plan</template>
    <template #description>You have the option of monthly or yearly billing</template>
    <template #inputs>
      <Stack
        v-auto-animate
        class="plan-inputs"
      >
        <InputCard
          v-if="isMonthly"
          v-for="monthlyPlan in monthlyPlanInfo"
          :key="monthlyPlan.id + monthlyPlan.price"
          @click="selectedId = monthlyPlan.id"
          :id="monthlyPlan.id"
          :selected="selectedId == monthlyPlan.id"
        >
          <template #icon> <component :is="icons[monthlyPlan.id]" /> </template>
          <template #main-content>
            <Stack class="main-content">
              <span
                style="text-transform: capitalize"
                class="h2"
                >{{ monthlyPlan.id }}</span
              >
              <span class="text-body-2">{{ monthlyPlan.price }}</span>
            </Stack>
          </template>
        </InputCard>

        <InputCard
          v-else
          v-for="yearlyPlan in yearlyPlanInfo"
          :key="yearlyPlan.id + yearlyPlan.price"
          @click="selectedId = yearlyPlan.id"
          :id="yearlyPlan.id"
          :selected="selectedId == yearlyPlan.id"
        >
          <template #icon> <component :is="icons[yearlyPlan.id]" /> </template>
          <template #main-content>
            <Stack class="main-content">
              <span
                style="text-transform: capitalize"
                class="h2"
                >{{ yearlyPlan.id }}</span
              >
              <span class="text-body-2">{{ yearlyPlan.price }}</span>
              <span class="blue text-body-3">2 months free</span>
            </Stack>
          </template>
        </InputCard>
      </Stack>

      <Row class="slider-card">
        <Slider
          @click="isMonthly = !isMonthly"
          :is-at-start="isMonthly"
          option1="monthly"
          option2="yearly"
        />
      </Row>
    </template>
    <template #buttons>
      <button
        class="secondary-btn"
        type="button"
      >
        Go back
      </button>
      <button
        :class="!selectedId && 'disabled-btn'"
        type="submit"
        :disabled="!selectedId"
        @click="click"
      >
        Next Step
      </button>
    </template>
  </FormContent>
</template>
<script setup>
import { FormContent, Row, Stack } from '@/components';
import InputCard from './components/InputCard.vue';
import { IconAdvanced, IconArcade, IconPro } from '@/components/Icons';
import { ref } from 'vue';
import Slider from './components/Slider.vue';
import { monthlyPlanInfo, yearlyPlanInfo } from './data/planInfo.js';

const icons = {
  arcade: IconArcade,
  advanced: IconAdvanced,
  pro: IconPro,
};

const selectedId = ref(null);
const isMonthly = ref(true);

function click() {
  console.log({ plan: selectedId.value, isMonthly: isMonthly.value });
}
</script>

<style scoped>
.slider-card {
  background-color: var(--color-gray-200);
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
}

.plan-inputs {
  gap: 1rem;
  min-height: 19.5rem;
}

.main-content {
  gap: 0.3rem;
}
</style>
