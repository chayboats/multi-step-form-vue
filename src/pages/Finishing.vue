<template>
  <Page>
    <template #title> Finishing Up </template>
    <template #description> Double-check everything looks OK before confirming. </template>
    <template #content>
      <Stack
        v-if="isMonthly"
        style="gap: 1rem"
      >
        <Row style="justify-content: space-between; align-items: center">
          <Stack>
            <span class="capitalize h2 blue">{{ plan }} (Monthly)</span>
            <span
              class="change"
              @click="$emit('change')"
              >Change</span
            >
          </Stack>
          <span class="h2 blue">${{ planPrices.monthly[plan] }}/mo</span>
        </Row>
        <hr />
        <Row
          style="justify-content: space-between"
          v-for="addOn in addOnKeys"
        >
          <span>{{ addOnInfo[addOn].title }}</span>
          <span class="h3 blue">+${{ addOnInfo[addOn].price.monthly }}/mo</span>
        </Row>
        <Row style="justify-content: space-between">
          <span>Total (per month)</span>
          <span class="h2 purple">${{ totalPrice() }}/mo</span>
        </Row>
      </Stack>
      <Stack
        v-else
        style="gap: 1rem"
      >
        <Row style="justify-content: space-between; align-items: center">
          <Stack>
            <span class="capitalize h2 blue">{{ plan }} (Yearly)</span>
            <span
              class="change"
              @click="$emit('change')"
              >Change</span
            >
          </Stack>
          <span class="h2 blue">${{ planPrices.yearly[plan] }}/yr</span>
        </Row>
        <hr />
        <Row
          style="justify-content: space-between"
          v-for="addOn in addOnKeys"
        >
          <span>{{ addOnInfo[addOn].title }}</span>
          <span class="h3 blue">+${{ addOnInfo[addOn].price.yearly }}/yr</span>
        </Row>
        <Row style="justify-content: space-between">
          <span>Total (per year)</span>
          <span class="h2 purple">${{ totalPrice() }}/yr</span>
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

const props = defineProps({
  isMonthly: { type: Boolean, required: true },
  plan: { type: String, required: true },
  addOns: { type: Object, required: true },
});

defineEmits(['change', 'confirm', 'back']);

const addOnKeys = Object.keys(props.addOns).filter((key) => props.addOns[key] === true);

function totalPrice() {
  const frequency = props.isMonthly ? 'monthly' : 'yearly';
  const planPrice = planPrices[frequency][props.plan];
  const addOnPrices = addOnKeys.map((key) => addOnInfo[key].price[frequency]);
  const prices = [planPrice, ...addOnPrices];

  return prices.reduce((acc, curr) => acc + curr, 0);
}
</script>

<style scoped>
.change {
  color: var(--color-gray-400);
  text-decoration: underline;
}
.change:hover {
  cursor: pointer;
}
</style>
