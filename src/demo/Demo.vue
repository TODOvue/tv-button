<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvButton = defineAsyncComponent(/* webpackChunkName: "TvButton" */() => import('../components/TvButton.vue'))

</script>

<template>
  <TvDemo
    :component="TvButton"
    :variants="demos"
    component-name="TvButton"
    npm-install="@todovue/tv-button"
    source-link="https://github.com/TODOvue/tv-button"
    url-clone="https://github.com/TODOvue/tv-button.git"
    version="1.2.0"
  />
</template>

<style scoped>

</style>
