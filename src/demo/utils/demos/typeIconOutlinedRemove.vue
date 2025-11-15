<template>
  <tv-button
    icon="remove"
    type="icon"
    outlined
    @click-button="clickHandler"
  />
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const clickHandler = () => {
  console.log('clicked');
};
</script>
