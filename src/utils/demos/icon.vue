<template>
  <tv-button
    icon="edit"
    @click="clickHandler"
  >
    Icon
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
