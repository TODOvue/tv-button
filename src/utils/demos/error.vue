<template>
  <tv-button
    error
    @click="clickHandler"
  >
    Error
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
