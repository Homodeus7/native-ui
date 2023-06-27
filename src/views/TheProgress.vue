<script setup>
import TheProgressBar from "@/components/progress/TheProgressBar.vue";
import TheProgressCircle from "@/components/progress/TheProgressCircle.vue";
import TheButton from "@/components/TheButton.vue";

import { ref } from "vue";

const percentBar = ref(40);

const percentBarDynamic = ref(30);
const percentCircleDynamic = ref(30);

const addPercentBar = () =>
  percentBarDynamic.value === 100
    ? (percentBarDynamic.value = 0)
    : (percentBarDynamic.value += 10);

const minusPercentBar = () =>
  percentBarDynamic.value === 0
    ? (percentBarDynamic.value = 100)
    : (percentBarDynamic.value -= 10);

const addPercentCircle = () =>
  percentCircleDynamic.value === 100
    ? (percentCircleDynamic.value = 0)
    : (percentCircleDynamic.value += 10);

const minusPercentCircle = () =>
  percentCircleDynamic.value === 0
    ? (percentCircleDynamic.value = 100)
    : (percentCircleDynamic.value -= 10);
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-3">Progress Bar</h2>
  <div class="line line_block">
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="primary" />
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="second" />
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="success" />
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="info" />
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="warning" />
    <TheProgressBar maxWidth="400px" :percent="percentBar" color="danger" />
  </div>
  <h2 class="heading-3">Dynamic Progress Bar</h2>
  <div class="line line_block">
    <TheProgressBar maxWidth="400px" :percent="percentBarDynamic" color="success" />
    <TheButton label="Minus 10%" @click="minusPercentBar" color="success" outlined />
    <TheButton label="Add 10%" @click="addPercentBar" color="success" outlined />
  </div>
  <h2 class="heading-3">Progress Circle</h2>
  <div class="line line_block">
    <TheProgressCircle :percent="percentCircleDynamic" />
    <TheButton label="Minus 10%" @click="minusPercentCircle" outlined />
    <TheButton label="Add 10%" @click="addPercentCircle" outlined />
  </div>
</template>
