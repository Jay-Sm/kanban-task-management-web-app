<template>
  <button class="toggle-btn" @click="swtichTheme()">Toggle</button>

  <div class="wrapper">
    <header>
      <div class="logo-container">
        <img :class="{ 'hidden': !preferDark }" src="./assets/images/logo-light.svg">
        <img :class="{ 'hidden': preferDark }" src="./assets/images/logo-dark.svg">
      </div>
      <div class="nav">
        <h1>Title Here</h1>

        <div class="nav-buttons">
          <button class="new-task">
            + Add New Task
          </button>

          <button class="nav-settings">
            <svg class="min-w-[1.6rem] min-h-[1.6rem]" fill="#828fa3" width="16" height="16"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </button>
        </div>
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
  @apply h-[6.9rem] bg-background2 dark:bg-background2-dark flex flex-row border-b border-borderColor dark:border-borderColor-dark
}

header .logo-container {
  @apply min-w-[18.75rem] h-full border-r border-borderColor dark:border-borderColor-dark flex items-center
}

header .logo-container img {
  @apply ml-[2rem]
}

.nav {
  @apply flex flex-row items-center justify-between w-full
}

.nav h1 {
  @apply ml-[2rem] font-bold text-2xl
}

.nav-buttons{
  @apply flex flex-row items-center justify-between gap-x-4 mr-8
}

.new-task {
  @apply bg-themeColor hover:bg-themeColor-hover text-white py-3 px-5 rounded-full font-bold
}

.nav-settings {
  @apply hover:bg-settingsBackground max-w-[1.3rem] py-1 rounded-full flex justify-center items-center 
}

/* Main & Sidebar */
.wrapper>.main {
  @apply h-full w-full flex flex-row
}

.sidebar {
  @apply min-w-[18.75rem] h-full bg-background2 dark:bg-background2-dark border-r border-borderColor dark:border-borderColor-dark
}

.kanban {
  @apply w-full min-w-max h-full border-r border-borderColor dark:border-borderColor-dark
}
</style>