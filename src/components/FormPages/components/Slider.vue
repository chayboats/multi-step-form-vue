<template>
  <Row class="slider-container">
    <span
      :class="isAtStart && 'blue'"
      class="h3 capitalize"
      >{{ option1 }}</span
    >
    <Row
      @click="$emit('click')"
      class="slider"
    >
      <div class="ball"></div>
    </Row>
    <span
      :class="!isAtStart && 'blue'"
      class="h3 capitalize"
      >{{ option2 }}</span
    >
  </Row>
</template>

<script setup>
import { Row } from '@/components';

defineEmits(['click']);

defineProps({
  isAtStart: { type: Boolean, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
});
</script>

<style scoped>
.slider-container {
  align-items: center;
  gap: 1rem;
}

.slider {
  background-color: var(--color-dark-blue);
  width: 3rem;
  height: 1.5rem;
  border-radius: 5rem;
  padding: 0.25rem;
}

.slider:hover {
  cursor: pointer;
}

.ball {
  background-color: var(--color-white);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: 0.5s;
  transform: translateX(v-bind('!isAtStart && "150%"'));
}
</style>
