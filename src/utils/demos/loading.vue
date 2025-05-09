<template>
  <tv-button
    @click="clickHandler"
    is-loading
  >
    Default
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
