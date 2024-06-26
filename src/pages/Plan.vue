<template>
  <Page v-auto-animate>
    <template #title>Select Your Plan</template>
    <template #description>You have the option of monthly or yearly billing</template>
    <template #content>
      <Stack
        v-auto-animate
        class="plan-inputs"
      >
        <InputCard
          v-if="isMonthly"
          v-for="monthlyPlan in Object.keys(planPrices.monthly)"
          :key="monthlyPlan + planPrices.monthly[monthlyPlan]"
          @click="$emit('selectPlan', monthlyPlan)"
          :id="monthlyPlan"
          :selected="plan == monthlyPlan"
        >
          <template #icon> <component :is="icons[monthlyPlan]" /> </template>
          <template #main-content>
            <Stack class="main-content">
              <span
                style="text-transform: capitalize"
                class="h2"
                >{{ monthlyPlan }}</span
              >
              <span class="text-body-2">${{ planPrices.monthly[monthlyPlan] }}/mo</span>
            </Stack>
          </template>
        </InputCard>

        <InputCard
          v-else
          v-for="yearlyPlan in Object.keys(planPrices.yearly)"
          :key="yearlyPlan + planPrices.yearly[yearlyPlan]"
          @click="$emit('selectPlan', yearlyPlan)"
          :id="yearlyPlan"
          :selected="plan == yearlyPlan"
        >
          <template #icon> <component :is="icons[yearlyPlan]" /> </template>
          <template #main-content>
            <Stack class="main-content">
              <span
                style="text-transform: capitalize"
                class="h2"
                >{{ yearlyPlan }}</span
              >
              <span class="text-body-2">${{ planPrices.yearly[yearlyPlan] }}/yr</span>
              <span class="blue text-body-3">2 months free</span>
            </Stack>
          </template>
        </InputCard>
      </Stack>

      <Row class="slider-card">
        <Slider
          @click="$emit('toggleBillingFrequency')"
          :is-at-start="isMonthly"
          option1="monthly"
          option2="yearly"
        />
      </Row>
      <div v-auto-animate>
        <Row
          class="notice"
          v-if="error"
        >
          <IconWarning />
          <div>
            <span class="h2">Warning: </span>
            <span class="blue">Please select a plan from the options above.</span>
          </div>
        </Row>
      </div>
    </template>
    <template #buttons>
      <button
        class="secondary-btn"
        type="button"
        @click="$emit('back')"
      >
        Go back
      </button>
      <button
        type="button"
        @click="submit"
      >
        Next Step
      </button>
    </template>
  </Page>
</template>
<script setup>
import { Page, Row, Stack } from '@/components';
import InputCard from './components/InputCard.vue';
import { IconAdvanced, IconArcade, IconPro, IconWarning } from '@/components/Icons';
import Slider from './components/Slider.vue';
import planPrices from './data/planPrices.js';
import { ref, computed } from 'vue';

const emits = defineEmits(['toggleBillingFrequency', 'back', 'next', 'selectPlan']);

const props = defineProps({
  isMonthly: { type: Boolean, required: true },
  plan: { type: [String, null], required: true },
});

const icons = {
  arcade: IconArcade,
  advanced: IconAdvanced,
  pro: IconPro,
};

const submitted = ref(false);

const error = computed(() => {
  if (submitted.value) {
    return props.plan ? false : true;
  }
  return false;
});

function submit() {
  submitted.value = true;
  props.plan && emits('next');
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

.notice {
  background-color: #fff1e0;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
