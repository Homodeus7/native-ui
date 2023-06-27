<script setup>
import TheButton from '@/components/TheButton.vue';

const eventForButton = () => {
  alert('You clicked button');
};
</script>
<template>
  <h1 class="heading-1">Button</h1>
  <h3 class="heading-3">Basic</h3>
  <div class="line">
    <TheButton label="Primary" color="primary"></TheButton>
    <TheButton label="Secondary" color="second"></TheButton>
    <TheButton label="Success" color="success"></TheButton>
    <TheButton label="Info" color="info"></TheButton>
    <TheButton label="Warning" color="warning"></TheButton>
    <TheButton label="Danger" color="danger"></TheButton>
  </div>
  <h3 class="heading-3">Rounded button</h3>
  <div class="line">
    <TheButton label="Primary" color="primary" rounded />
    <TheButton label="Secondary" color="second" rounded />
    <TheButton label="Success" color="success" rounded />
    <TheButton label="Info" color="info" rounded />
    <TheButton label="Warning" color="warning" rounded />
    <TheButton label="Danger" color="danger" rounded />
  </div>
  <h3 class="heading-3">Disabled</h3>
  <p>Buttons can be disabled.</p>
  <div class="line">
    <TheButton label="Disabled" color="primary" disabled />
  </div>
  <h3 class="heading-3">Outlined button</h3>
  <div class="line">
    <TheButton label="Primary" color="primary" outlined />
    <TheButton label="Secondary" color="second" outlined />
    <TheButton label="Success" color="success" outlined />
    <TheButton label="Info" color="info" outlined />
    <TheButton label="Warning" color="warning" outlined />
    <TheButton label="Danger" color="danger" outlined />
  </div>
  <h3 class="heading-3">Icon</h3>
  <div class="line">
    <TheButton color="primary" icon="heart" />
    <TheButton color="second" icon="hand" />
    <TheButton color="success" icon="address-book" />
    <TheButton color="info" icon="credit-card" />
    <TheButton color="warning" icon="lemon" />
    <TheButton color="danger" icon="hourglass" />
  </div>
  <h3 class="heading-3">Size</h3>
  <div class="line">
    <TheButton label="Small Small" color="primary" size="tiny" outlined />
    <TheButton label="Small" color="primary" size="small" outlined />
    <TheButton label="Not Small" color="primary" size="medium" outlined />
    <TheButton label="Not Not Small" color="primary" size="large" outlined />
  </div>
  <h3 class="heading-3">Event</h3>
  <div class="line">
    <TheButton label="Click Me" color="danger" @click="eventForButton" />
  </div>
</template>

<style lang="scss" scoped></style>
