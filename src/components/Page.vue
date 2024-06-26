<template>
  <Stack class="page">
    <Stack class="card">
      <div>
        <slot name="icon" />
      </div>

      <span class="h1">
        <slot name="title"></slot>
      </span>

      <p>
        <slot name="description"></slot>
      </p>

      <slot name="content"> </slot>
    </Stack>

    <Row class="buttons">
      <slot name="buttons"></slot>
    </Row>
  </Stack>
</template>
<script setup>
import { Stack, Row } from '@/components';

defineProps({
  isLastPage: { type: Boolean, default: false },
});
</script>

<style scoped>
.page {
  height: 100%;
  justify-content: space-between;
}

.card {
  display: flex;
  flex-direction: column;
  padding: v-bind('isLastPage ? "5rem 1.5rem" : "1.5rem"');
  gap: 1rem;
  background-color: var(--color-white);
  border-radius: 0.75rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.buttons {
  width: 100%;
  justify-content: space-between;
  padding-top: 1rem;
}
</style>
