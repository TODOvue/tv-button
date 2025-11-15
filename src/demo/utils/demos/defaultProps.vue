<template>
  <tv-button
    buttonText="Default Props"
    @click="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
