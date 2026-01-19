<template>
  <tv-button
    variant="info"
    @click="clickHandler"
  >
    Info
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const clickHandler = () => {
  console.log('clicked');
};
</script>
