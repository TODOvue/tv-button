<template>
  <tv-button
    success
    @click="clickHandler"
  >
    Success
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
