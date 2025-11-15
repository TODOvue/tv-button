<template>
  <tv-button
    icon="help"
    type="icon"
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
