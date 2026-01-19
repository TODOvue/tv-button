<template>
  <tv-button
    size="lg"
    variant="info"
    @click="clickHandler"
  >
    Press me
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const clickHandler = () => {
  console.log('clicked');
};
</script>
