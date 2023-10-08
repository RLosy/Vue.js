<template>
  <div class="app">
    <!-- store中的counter -->
    <h2>app当前计数:{{ $store.state.counter }}</h2>
    <!-- home页面 -->
    <hr>
    <home> </home>
  </div>
</template>

<script setup>
import Home from './views/Home'

</script>

<style></style>
