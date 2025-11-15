<template>
  <tv-button
    :customStyle="customStyle"
    outlined
    @click="clickHandler"
  >
    Is outlined
  </tv-button>
</template>

<script setup>
import { ref } from 'vue';
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const customStyle = ref({
  backgroundColor: '#5f31b7',
  color: '#fff', // The color will be used for the hover.
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
