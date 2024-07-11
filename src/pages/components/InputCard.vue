<template>
  <Row
    :id="id"
    class="input-card"
  >
    <div class="content">
      <slot name="icon"></slot>
      <Stack style="gap: 0.1rem">
        <slot name="main-content"></slot>
      </Stack>
    </div>

    <slot name="additional-info"></slot>
  </Row>
</template>

<script setup>
import { Row, Stack } from '@/components';

defineProps({
  id: { type: String, required: true },
  selected: { type: Boolean, default: false },
  plan: { type: Boolean, default: false },
});
</script>

<style scoped>
.input-card {
  border: 1px solid;
  border-color: v-bind('selected && "var(--color-purple)"');
  background-color: v-bind('selected && "var(--color-gray-100)"');
  border-radius: 0.5rem;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
}

.input-card:hover {
  cursor: pointer;
  border: 1px solid var(--color-purple);
  background-color: var(--color-gray-100);
}
.content {
  display: flex;
  gap: 1rem;
  @media (--desktop) {
    flex-direction: v-bind('plan && "column"');
  }
}
</style>
