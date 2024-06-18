<template>
  <FormContent>
    <template #title>Pick add-ons</template>
    <template #description>Add-ons helps enhance your gaming experience</template>
    <template #inputs>
      <InputCard
        style="border-color: var(--color-gray-300)"
        v-for="addOn in Object.keys(addOns)"
        :key="addOns[addOn].id"
        :id="addOns[addOn].id"
      >
        <template #icon>
          <Stack style="justify-content: center">
            <IconCheckmark />
          </Stack>
        </template>
        <template #main-content>
          <Stack class="main-content">
            <span
              style="text-transform: capitalize"
              class="h2"
              >{{ addOns[addOn].title }}</span
            >
            <span class="text-body-2">{{ addOns[addOn].description }}</span>
          </Stack>
        </template>
        <template #additional-info>
          <span class="text-body-2 purple">{{ addOns[addOn].price.monthly }}</span>
        </template>
      </InputCard>
    </template>
  </FormContent>
</template>

<script setup>
import { FormContent, Stack } from '@/components';
import InputCard from './components/InputCard.vue';
import addOns from './data/addOnInfo.js';
import { IconCheckmark } from '@/components/Icons';
import { ref } from 'vue';

</script>
