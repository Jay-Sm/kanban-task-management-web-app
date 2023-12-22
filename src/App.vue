<template>
  <button class="toggle-btn" @click="swtichTheme()">Toggle</button>

  <div>
    <h1 class="text-4xl p-5">App View</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const preferDark = ref(false)
function swtichTheme() {
  preferDark.value = !preferDark.value

  if (preferDark.value == true) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
}
</script>

<style>
.toggle-btn {
  @apply fixed top-2 right-12 w-min h-min border-2 rounded-full flex justify-center items-center
}
</style>