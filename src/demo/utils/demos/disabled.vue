<template>
  <tv-button
    disabled
    @click="clickHandler"
  >
    Disabled
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
