<template>
  <Form>
    <template #title>Pick add-ons</template>
    <template #description>Add-ons helps enhance your gaming experience</template>
    <template #inputs>
      <InputCard
        v-for="addOn in Object.keys(addOns)"
        :key="addOns[addOn].id"
        :id="addOns[addOn].id"
      >
        <template #icon>
          <IconCheckmark />
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
  </Form>
</template>

<script setup>
import { Form, Stack } from '@/components';
import InputCard from './components/InputCard.vue';
import addOns from './data/addOnInfo.js';
import { IconCheckmark } from '@/components/Icons';
</script>
