<template>
  <tv-button
    rounded
    :customStyle="customStyle"
    @click="clickHandler"
  >
    Press me
  </tv-button>
</template>

<script setup>
import { ref } from 'vue';
import TvButton from '@todovue/tv-button';
import '@todovue/tv-button/style.css';

const customStyle = ref({
  backgroundColor: '#1144b3',
  color: '#fff',
});

const clickHandler = () => {
  console.log('clicked');
};
</script>
