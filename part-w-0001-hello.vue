<script setup lang="ts">

  const year = 2026

  function handleClick() {

    console.log("You clicked!")
  }

</script>

<template>

  <h1>Hello World!</h1>

  <p>In {{ year }}, I'll do my best!</p>

  <button @click="handleClick">Click It</button>
  
</template>
