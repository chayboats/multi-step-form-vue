<template>
  <form
    @submit.prevent="formValidation"
    style="height: 100%"
  >
    <Page>
      <template #title>Personal Info</template>
      <template #description>Please provide your name, email, address, and phone number</template>
      <template #content>
        <Stack
          v-for="key in dataKeys"
          :key="key + dataKeys.indexOf(key)"
        >
          <Row style="justify-content: space-between">
            <label
              class="capitalize"
              :for="key"
              >{{ key }}</label
            >
            <span
              class="h2 red"
              v-if="dataErrors[key]"
              >This field is required</span
            >
          </Row>

          <input
            :style="dataErrors[key] && 'border: 1px solid var(--color-red)'"
            :id="yourInfo[key].name"
            :type="yourInfo[key].type"
            :placeholder="yourInfo[key].placeholder"
            :maxlength="yourInfo[key]?.maxlength"
            :pattern="yourInfo[key]?.pattern"
            :title="yourInfo[key]?.title"
            v-model="personalData[key]"
          />
        </Stack>
      </template>
      <template #buttons>
        <FlexSpace />
        <button type="submit">Next Step</button>
      </template>
    </Page>
  </form>
</template>
<script setup>
import { Page, FlexSpace, Stack, Row } from '@/components';
import { ref } from 'vue';
import yourInfo from './data/yourInfo.js';

const emits = defineEmits(['submit']);

const personalData = defineModel()

const dataErrors = ref({ name: false, email: false, phone: false });

const dataKeys = Object.keys(personalData.value);

function formValidation() {
  function isEmpty(key) {
    const isEmptyString = personalData.value[key] === '';
    const isNull = personalData.value[key] === null;

    return isEmptyString || isNull;
  }

  function isValid() {
    const errors = Object.values(dataErrors.value);
    return !errors.includes(true);
  }

  dataErrors.value = { name: isEmpty('name'), email: isEmpty('email'), phone: isEmpty('phone') };

  isValid() && emits('submit');
}
</script>
