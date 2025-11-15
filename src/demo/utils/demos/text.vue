<template>
  <tv-button
    text
    :customStyle="customStyle"
    @click="clickHandler"
  >
    Text
  </tv-button>
</template>

<script setup>
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const customStyle = ref({
  color: "#ffffff",
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
