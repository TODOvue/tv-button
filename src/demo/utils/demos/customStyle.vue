<template>
  <tv-button
    :customStyle="customStyle"
    @click-button="clickHandler"
  >
    Custom Style
  </tv-button>
</template>

<script setup>
import { ref } from 'vue';
import TvButton from '@todovue/tv-button';

const customStyle = ref({
  backgroundColor: '#0f2e5b',
  color: '#fff',
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
