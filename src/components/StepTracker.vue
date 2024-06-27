<template>
  <Row class="step-tracker">
    <div
      :class="currentStep === step && 'highlighted'"
      class="number-circle"
      v-for="step in [...Array(4).keys()]"
      :key="step + 1"
    >
      <span>{{ step + 1 }}</span>
    </div>
  </Row>
</template>

<script setup>
import { Row } from '@/components';
defineProps({
  currentStep: { type: Number, required: true },
});
</script>

<style scoped>
.step-tracker {
  padding: 2rem;
  gap: 1rem;
  align-items: center;
}

.number-circle {
  border: 1px solid white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'ubuntu-medium';
}

.highlighted {
  background-color: var(--color-light-blue);
  color: var(--color-dark-blue);
  border: none;
}
</style>
