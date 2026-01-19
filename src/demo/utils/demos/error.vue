<template>
  <tv-button
    variant="error"
    @click="clickHandler"
  >
    Error
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const clickHandler = () => {
  console.log('clicked');
};
</script>
