

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
  
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped></style>
