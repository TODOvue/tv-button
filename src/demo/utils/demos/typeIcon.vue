<template>
  <tv-button
    icon="help"
    type="icon"
    @click="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tv-button';

const clickHandler = () => {
  console.log('clicked');
};
</script>
