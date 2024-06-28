<template>
  <Stack class="page">
    <Stack
      class="card"
      :class="!tablet && 'card-background'"
    >
      <div>
        <slot name="icon" />
      </div>

      <h1>
        <slot name="title"></slot>
      </h1>

      <p>
        <slot name="description"></slot>
      </p>

      <Stack class="card-content">
        <slot name="content"> </slot>
      </Stack>
    </Stack>

    <Row class="buttons">
      <slot name="buttons"></slot>
    </Row>
  </Stack>
</template>
<script setup>
import { Stack, Row } from '@/components';
import useBreakpoint from '@/use/useBreakpoint.js';

defineProps({
  isLastPage: { type: Boolean, default: false },
});

const { tablet } = useBreakpoint();
</script>

<style scoped>
.page {
  height: 100%;
  justify-content: space-between;
  @media (--tablet) {
    padding: 0 3rem;
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: v-bind('isLastPage ? "5rem 1.5rem" : "1.5rem"');
  gap: 1rem;
}

.card-content {
  gap: 1rem;
  width: 100%;
  @media (--tablet) {
    padding-top: 1.25rem;
  }
}

.buttons {
  width: 100%;
  justify-content: space-between;
  padding-top: 1rem;
  @media (--tablet) {
    padding-top: 0;
  }
}
</style>
