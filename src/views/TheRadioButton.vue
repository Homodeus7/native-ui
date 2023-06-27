<script setup>
import { ref } from 'vue';
import TheRadiobutton from '@/components/TheRadiobutton.vue';

const radioGroup = ref([
  { name: "Rock'n'Roll Star", id: '1' },
  { name: 'Shakermaker', id: '2' },
  { name: 'Live Forever', id: '3' },
  { name: 'Up in the Sky', id: '4' },
]);

const selectedRadio = ref('');

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected Club: {{ selectedRadio }}</p>
    <div v-for="radio in radioGroup" :key="radio.id">
      <TheRadiobutton
        :value="radio.name"
        :label="radio.name"
        :id="radio.id"
        name="radio"
        v-model:checkedValue="selectedRadio"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <TheRadiobutton
      value="Be Here Now"
      label="Be Here Now"
      :id="BeHereNow"
      name="BeHereNow"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>
