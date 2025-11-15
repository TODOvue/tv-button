<template>
  <tv-button
    buttonText="Default Props"
    @click="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const clickHandler = () => {
  console.log('clicked');
};
</script>
