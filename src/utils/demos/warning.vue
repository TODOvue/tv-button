<template>
  <tv-button
    warning
    @click="clickHandler"
  >
    Warning
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
