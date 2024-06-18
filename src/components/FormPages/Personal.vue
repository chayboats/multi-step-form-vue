<template>
  <FormContent>
    <template #title>Personal Info</template>
    <template #description>Please provide your name, email, address, and phone number</template>
    <template #inputs>
      <Stack>
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          required
          v-model="name"
        />
      </Stack>

      <Stack>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          v-model="email"
        />
      </Stack>

      <Stack>
        <label for="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          v-model="phone"
        />
      </Stack>
    </template>
    <template #buttons>
      <FlexSpace />
      <button
        :class="disabled && 'disabled-btn'"
        type="submit"
        :disabled="disabled"
        @click="click"
      >
        Next Step
      </button>
    </template>
  </FormContent>
</template>
<script setup>
import { FormContent, FlexSpace, Stack } from '@/components';
import { ref, computed } from 'vue';

const name = ref(null);
const email = ref(null);
const phone = ref(null);

const disabled = computed(() => !name.value || !email.value || !phone.value);

function click() {
  console.log({ name: name.value, email: email.value, phone: phone.value });
}
</script>
