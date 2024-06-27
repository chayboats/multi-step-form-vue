<template>
  <Row
    :id="id"
    class="input-card"
  >
    <Row style="gap: 1rem">
      <slot name="icon"></slot>
      <Stack style="gap: 0.1rem">
        <slot name="main-content"></slot>
      </Stack>
    </Row>

    <slot name="additional-info"></slot>
  </Row>
</template>

<script setup>
import { Row, Stack } from '@/components';

defineProps({
  id: { type: String, required: true },
  selected: { type: Boolean, default: false },
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
}
</style>
