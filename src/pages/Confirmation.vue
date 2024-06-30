<template>
  <Page
    class="thank-you"
    is-last-page
  >
    <template #icon><IconThankYou /></template>
    <template #title>Thank You</template>
    <template #description
      >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.</template
    >
  </Page>
</template>

<script setup>
import { IconThankYou } from '@/components/Icons';
import { Page } from '@/components';
</script>

<style scoped>
.thank-you {
  align-items: center;
  text-align: center;
  gap: 1rem;
  @media (--desktop) {
    justify-content: center;
  }
}
</style>
