<template>
  <tv-button
    large
    @click="clickHandler"
  >
    Large
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
