<template>
  <form
    @submit.prevent="formValidation"
    style="height: 100%"
    novalidate
  >
    <Page>
      <template #title>Personal Info</template>
      <template #description>Please provide your name, email, address, and phone number</template>
      <template #content>
        <Stack>
          <Row style="justify-content: space-between">
            <label for="name">Name</label>
            <span v-if="dataErrors.name">This field is required</span>
          </Row>

          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            v-model="personalData.name"
          />
        </Stack>

        <Stack>
          <Row style="justify-content: space-between">
            <label for="email">Email</label>
            <span v-if="dataErrors.email">This field is required</span>
          </Row>

          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            v-model="personalData.email"
          />
        </Stack>

        <Stack>
          <Row style="justify-content: space-between">
            <label for="phone">Phone Number</label>
            <span v-if="dataErrors.phone">This field is required</span>
          </Row>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 1234567890"
            maxlength="10"
            pattern="\d{10}"
            title="1234567890"
            v-model="personalData.phone"
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

const emits = defineEmits(['submit']);

const props = defineProps({
  personalData: { type: Object, required: true },
});

const dataErrors = ref({ name: false, email: false, phone: false });

const dataKeys = Object.keys(props.personalData);

function formValidation() {
  function isEmpty(key) {
    const isEmptyString = props.personalData[key] === '';
    const isNull = props.personalData[key] === null;

    return isEmptyString || isNull;
  }

  const emptyInputs = dataKeys.filter((key) => isEmpty(key));

  if (emptyInputs.length > 0) {
    emptyInputs.forEach((input) => (dataErrors.value[input] = true));
    console.log(dataErrors.value);
    return;
  }

  emits('submit');
}
</script>
