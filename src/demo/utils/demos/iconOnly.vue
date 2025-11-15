<template>
  <tv-button
    icon="star"
    type="icon"
    icon-only
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
