<script setup lang="ts">

  import {ref} from "vue"

  const counter = ref(0)

  function counterUp() {

    counter.value++
  }

</script>

<template>

  <p>Counter: {{ counter }}</p>

  <button @click="counterUp">Counter ++</button>
  
</template>


