<template>
  <button class="toggle-btn" @click="swtichTheme()">Toggle</button>

  <div class="wrapper">
    <header>
      <div class="logo-container">
        Logo Here
      </div>
      <div class="nav">
        <h1>Title Here</h1>

        <div>item2</div>
      </div>
    </header>

    <div class="main">
      <div class="sidebar">sidebar</div>
      <div class="kanban">main content</div>
    </div>
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
/* To Remove Later */
.toggle-btn {
  @apply fixed bottom-12 left-12 w-min h-min border-2 rounded-full flex justify-center items-center
}

.wrapper {
  @apply h-full w-full flex flex-col
}

/* Header */
.wrapper>header {
  @apply h-[6.9rem] bg-themeColor dark:bg-themeColor-dark flex flex-row border-b border-borderColor dark:border-borderColor-dark
}

header .logo-container {
  @apply w-[23.3rem] min-w-max h-full border-r border-borderColor dark:border-borderColor-dark
}

header>.nav {
  @apply flex flex-row items-center justify-between w-full
}

/* Main & Sidebar */
.wrapper>.main{
  @apply h-full w-full flex flex-row
}

.sidebar {
  @apply w-[23.3rem] min-w-max h-full bg-themeColor dark:bg-themeColor-dark border-r border-borderColor dark:border-borderColor-dark
}

.kanban {
  @apply w-full min-w-max h-full border-r border-borderColor dark:border-borderColor-dark
}
</style>