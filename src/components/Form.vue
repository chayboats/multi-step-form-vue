<template>
  <form
    @submit.prevent="$emit('submit')"
    class="form"
  >
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
  </form>
</template>
<script setup>
defineEmits(['submit']);
</script>

<style scoped>
.form {
  background-color: var(--color-white);
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
