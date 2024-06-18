<template>
  <Stack class="form-content">
    <span class="h1">
      <slot name="title"></slot>
    </span>

    <span>
      <slot name="description"></slot>
    </span>

    <slot name="inputs"> </slot>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </Stack>
</template>
<script setup>
import { Stack } from '@/components';
</script>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
