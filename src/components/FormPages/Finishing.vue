<template>
  <FormContent>
    <template #title> Finishing Up </template>
    <template #description>
      Double-check everything looks OK before confirming.
    </template>
    <template #inputs>
      <Stack style="gap: 1rem">
        <Row style="justify-content: space-between; align-items: center">
          <Stack>
            <span class="capitalize h2 blue"
              >{{ plan }} ({{ isMonthly ? "Monthly" : "Yearly" }})</span
            >
            <span class="change" @click="$emit('change')">Change</span>
          </Stack>
          <span class="h2 blue" v-if="isMonthly"
            >${{ planPrices.monthly[plan] }}</span
          >
          <span class="h2 blue" v-else>{{ planPrices.yearly[plan] }}</span>
        </Row>
        <hr />
        <Row style="justify-content: space-between;" v-for="addOn in addOnKeys">
          <span>{{ addOnInfo[addOn].title }}</span>
          <span class="h3 blue" v-if="isMonthly">{{
            addOnInfo[addOn].price.monthly
          }}</span>
          <span class="h3 blue" v-else>{{ addOnInfo[addOn].price.yearly }}</span>
        </Row>
        <Row style="justify-content: space-between;">
          <span>Total (per {{ isMonthly ? 'month' : 'year' }})</span>


        </Row>
      </Stack>
    </template>

    <template #buttons>
      <button class="secondary-btn" type="button" @click="$emit('back')">
        Go back
      </button>
      <button type="button" @click="$emit('confirm')">Confirm</button>
    </template>
  </FormContent>
</template>

<script setup>
import { FormContent, Stack, Row, Columns } from "@/components";
import planPrices from "./data/planPrices.js";
import addOnInfo from "./data/addOnInfo.js";

const props = defineProps({
  isMonthly: { type: Boolean, required: true },
  plan: { type: String, required: true },
  addOns: { type: Object, required: true },
});

defineEmits(["change", "next", "back"]);

const addOnKeys = Object.keys(props.addOns).filter(
  (key) => props.addOns[key] === true
);
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
