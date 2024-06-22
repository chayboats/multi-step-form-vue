<template>
  <FormContent>
    <template #title>Pick add-ons</template>
    <template #description
      >Add-ons helps enhance your gaming experience</template
    >
    <template #inputs>
      <InputCard
        class="add-on"
        :class="data[addOns[addOn].id] && 'selected'"
        v-for="addOn in Object.keys(addOns)"
        :key="addOns[addOn].id"
        :id="addOns[addOn].id"
        @click="$emit('setAddOns', addOns[addOn].id)"
      >
        <template #icon>
          <Stack style="justify-content: center">
            <IconCheckedBox v-if="data[addOns[addOn].id]" />
            <IconUncheckedBox v-else />
          </Stack>
        </template>
        <template #main-content>
          <Stack class="main-content">
            <span style="text-transform: capitalize" class="h2">{{
              addOns[addOn].title
            }}</span>
            <span class="text-body-2">{{ addOns[addOn].description }}</span>
          </Stack>
        </template>
        <template #additional-info>
          <span class="text-body-2 purple">{{
            addOns[addOn].price[isMonthly ? "monthly" : "yearly"]
          }}</span>
        </template>
      </InputCard>
    </template>
    <template #buttons>
      <button class="secondary-btn" type="button" @click="$emit('back')">
        Go back
      </button>
      <button type="button" @click="$emit('next')">Next Step</button>
    </template>
  </FormContent>
</template>

<script setup>
import { FormContent, Stack } from "@/components";
import InputCard from "./components/InputCard.vue";
import addOns from "./data/addOnInfo.js";
import { IconCheckedBox, IconUncheckedBox } from "@/components/Icons";

defineProps({
  isMonthly: { type: Boolean, required: true },
  data: { type: Object, required: true },
});

defineEmits(["setAddOns", "next", "back"]);
</script>

<style scoped>
.add-on {
  border-color: var(--color-gray-300);
}

.add-on.selected {
  border-color: var(--color-purple);
  background-color: var(--color-gray-200);
}
</style>
