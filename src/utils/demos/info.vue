<template>
  <tv-button
    info
    @click="clickHandler"
  >
    Info
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
