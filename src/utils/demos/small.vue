<template>
  <tv-button
    small
    @click="clickHandler"
  >
    Small
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
