<template>
  <form
    @submit.prevent="$emit('submit')"
    style="height: 100%"
  >
    <Page>
      <template #title>Personal Info</template>
      <template #description>Please provide your name, email, address, and phone number</template>
      <template #content>
        <Stack>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            required
            v-model="personalData.name"
          />
        </Stack>

        <Stack>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            v-model="personalData.email"
          />
        </Stack>

        <Stack>
          <label for="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 1234567890"
            maxlength="10"
            pattern="\d{10}"
            required
            title="1234567890"
            v-model="personalData.phone"
          />
        </Stack>
      </template>
      <template #buttons>
        <FlexSpace />
        <button type="submit">Next Step</button>
      </template>
    </Page>
  </form>
</template>
<script setup>
import { Page, FlexSpace, Stack } from '@/components';

defineEmits(['submit']);

const props = defineProps({
  personalData: { type: Object, required: true },
});
</script>
