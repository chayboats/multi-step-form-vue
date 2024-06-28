<template>
  <Page>
    <template #title> Finishing Up </template>
    <template #description> Double-check everything looks OK before confirming. </template>
    <template #content>
      <Stack style="gap: 1rem">
        <Stack class="info-card">
          <Row style="justify-content: space-between; align-items: center">
            <Stack>
              <span class="capitalize h2 blue">{{ plan }} ({{ frequency }})</span>
              <span
                class="change"
                @click="$emit('change')"
                >Change</span
              >
            </Stack>
            <span class="h2 blue">${{ planPrices[frequency][plan] }}/{{ frequencyLabels[frequency].abbreviation }}</span>
          </Row>

          <hr style="border: 0.5px solid var(--color-gray-300)" />

          <Row
            style="justify-content: space-between"
            v-for="addOn in addOnKeys"
          >
            <span>{{ addOnInfo[addOn].title }}</span>
            <span class="blue">+${{ addOnInfo[addOn].price[frequency] }}/{{ frequencyLabels[frequency].abbreviation }}</span>
          </Row>
        </Stack>

        <Row
          class="total"
          style="justify-content: space-between"
        >
          <span>Total (per {{ frequencyLabels[frequency].unit }})</span>
          <span class="h2 purple">${{ totalPrice() }}/{{ frequencyLabels[frequency].abbreviation }}</span>
        </Row>
      </Stack>
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
        style="background-color: var(--color-purple)"
        type="button"
        @click="$emit('confirm')"
      >
        Confirm
      </button>
    </template>
  </Page>
</template>

<script setup>
import { Page, Stack, Row } from '@/components';
import planPrices from './data/planPrices.js';
import addOnInfo from './data/addOnInfo.js';
import frequencyLabels from './data/frequencyLabels.js';

const props = defineProps({
  plan: { type: String, required: true },
  addOns: { type: Object, required: true },
  frequency: { type: String, required: true },
});

defineEmits(['change', 'confirm', 'back']);

const addOnKeys = Object.keys(props.addOns).filter((key) => props.addOns[key] === true);

function totalPrice() {
  const planPrice = planPrices[props.frequency][props.plan];
  const addOnPrices = addOnKeys.map((key) => addOnInfo[key].price[props.frequency]);
  const prices = [planPrice, ...addOnPrices];

  return prices.reduce((acc, curr) => acc + curr, 0);
}
</script>

<style scoped>
.change {
  color: var(--color-gray-400);
  text-decoration: underline;
  transition: 0.15s ease-in-out;
}

.change:hover {
  cursor: pointer;
  color: var(--color-purple);
}

.info-card {
  background-color: var(--color-gray-100);
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
}

.total {
  justify-content: space-between;
  padding: 0 1rem;
}
</style>
