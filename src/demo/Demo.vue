<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvButton = defineAsyncComponent(/* webpackChunkName: "TvButton" */() => import('../components/TvButton.vue'))

</script>

<template>
  <tv-demo
    :component="TvButton"
    :variants="demos"
    nameComponent="TvButton"
    npmInstall="@todovue/tv-button"
    sourceLink="https://github.com/TODOvue/tv-button"
    urlClone="https://github.com/TODOvue/tv-button.git"
    version="1.1.3"
  ></tv-demo>
</template>

<style scoped>

</style>
