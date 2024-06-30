<template>
  <div :class="desktop && 'step-tracker-background'">
    <div class="step-tracker">
      <Row
        class="step"
        v-for="step in steps"
        :key="step + steps.indexOf(step)"
      >
        <div
          :class="currentStep === steps.indexOf(step) && 'highlighted'"
          class="circle"
        >
          <span>{{ steps.indexOf(step) + 1 }}</span>
        </div>
        <Stack
          v-if="desktop"
          class="step-description"
        >
          <span class="count">STEP {{ steps.indexOf(step) + 1 }}</span>
          <span class="name">{{ step }}</span>
        </Stack>
      </Row>
    </div>
  </div>
</template>

<script setup>
import { Row, Stack } from '@/components';
import steps from '../data/steps.js';
import useBreakpoint from '@/use/useBreakpoint.js';

const { desktop } = useBreakpoint();

defineProps({
  currentStep: { type: Number, required: true },
});
</script>

<style scoped>
.step-tracker-background {
  background: url('../assets/images/bg-sidebar-desktop.svg');
  height: 100%;
  border-radius: 0.5rem;
  background-repeat: no-repeat;
  width: 274px;
}

.step-tracker {
  display: flex;
  padding: 2rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media (--desktop) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
}

.step {
  gap: 1rem;
}

.step .circle {
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

.circle.highlighted {
  background-color: var(--color-light-blue);
  color: var(--color-dark-blue);
  border: none;
}

.step-description .count {
  color: rgba(255, 255, 255, 0.417);
  font-size: 0.75rem;
}

.step-description .name {
  color: white;
  font-family: 'ubuntu-medium';
  font-size: 0.9rem;
  letter-spacing: 1px;
}
</style>
