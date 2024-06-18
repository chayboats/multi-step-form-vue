<template>
  <Stack class="thank-you">
    <IconThankYou />
    <span class="h1">Thank you!</span>
    <span
      >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</span
    >
  </Stack>
</template>

<script setup>
import { IconThankYou } from './Icons';
import { Stack } from './index.js';
</script>

<style scoped>
.thank-you {
  align-items: center;
  text-align: center;
  gap: 1rem;
}
</style>
