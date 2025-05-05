<template>
  <tv-button
    icon="plus"
    iconPosition="left"
    @click="clickHandler"
  >
    Icon
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
