<template>
  <tv-button
    full
    @click="clickHandler"
  >
    Full
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
