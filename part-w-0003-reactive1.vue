<script setup lang="ts">

  import {reactive} from "vue"

  const counterObj = reactive({
    
    title: "Counter App",
    counter: 0
  })

  function counterUp() {

    counterObj.counter++
  }

</script>

<template>

  <h2>{{ counterObj.title }}</h2>

  <p>Counter: {{ counterObj.counter }}</p>

  <button @click="counterUp">Counter ++</button>

</template>


