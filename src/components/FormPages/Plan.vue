<template>
  <FormContent v-auto-animate>
    <template #title>Select Your Plan</template>
    <template #description
      >You have the option of monthly or yearly billing</template
    >
    <template #inputs>
      <Stack v-auto-animate class="plan-inputs">
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
              <span style="text-transform: capitalize" class="h2">{{
                monthlyPlan
              }}</span>
              <span class="text-body-2">{{
                planPrices.monthly[monthlyPlan]
              }}</span>
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
              <span style="text-transform: capitalize" class="h2">{{
                yearlyPlan
              }}</span>
              <span class="text-body-2">{{
                planPrices.yearly[yearlyPlan]
              }}</span>
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
    </template>
    <template #buttons>
      <button class="secondary-btn" type="button" @click="$emit('back')">
        Go back
      </button>
      <button
        :class="!plan && 'disabled-btn'"
        type="button"
        :disabled="!plan"
        @click="$emit('next')"
      >
        Next Step
      </button>
    </template>
  </FormContent>
</template>
<script setup>
import { FormContent, Row, Stack } from "@/components";
import InputCard from "./components/InputCard.vue";
import { IconAdvanced, IconArcade, IconPro } from "@/components/Icons";
import { ref } from "vue";
import Slider from "./components/Slider.vue";
import planPrices from "./data/planPrices.js";

const emits = defineEmits([
  "toggleBillingFrequency",
  "back",
  "next",
  "selectPlan",
]);

defineProps({
  isMonthly: { type: Boolean, required: true },
  plan: { type: String, required: true },
});

const icons = {
  arcade: IconArcade,
  advanced: IconAdvanced,
  pro: IconPro,
};
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
