<template>
  <input
    :id="attrs.id"
    :type="attrs.type"
    :placeholder="attrs.placeholder"
    :maxlength="attrs.maxlength"
    :pattern="attrs.pattern"
    :title="attrs.title"
    @change="handleValue"
    @input="handleValue"
    :value="modelValue"
  />
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  attrs: { type: Object, required: true },
  modelValue: { type: [String, Number, Boolean], default: '' },
});

function handleValue(event) {
  const value = event?.target?.value;
  const modelValue = props.type === 'number' ? Number(value) : value;

  emit('update:modelValue', modelValue);
}
</script>
