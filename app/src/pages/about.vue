<script setup>
import { ref } from 'vue';
const test = ref('This is a test variable');
</script>

<template>
  <div class="container">
    <h2>This is an about page</h2>
    <h3>{{ test }}</h3>
  </div>
</template>
