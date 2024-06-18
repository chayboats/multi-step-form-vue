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
          placeholder="e.g. +1 234 567 890"
          required
          v-model="personalData.phone"
        />
      </Stack>
    </template>
    <template #buttons>
      <FlexSpace />
      <button
        :class="disabled && 'disabled-btn'"
        type="submit"
        :disabled="disabled"
        @click="$emit('next')"
      >
        Next Step
      </button>
    </template>
  </FormContent>
</template>
<script setup>
import { FormContent, FlexSpace, Stack } from '@/components';
import { computed } from 'vue';

defineEmits(['next']);

const props = defineProps({
  personalData: { type: Object, required: true },
});

const disabled = computed(() => {
  const data = Object.values(props.personalData);

  return includesSome(data, [null, '']);
});

function includesSome(array, values) {
  const includes = (array, values) => values.some((value) => array.includes(value));
  return includes(array, values);
}
</script>
