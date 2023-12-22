<template>
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
            <svg class="min-w-[1.6rem] min-h-[1.6rem] fill-textColor" fill="currentColor" width="16" height="16"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="sidebar">
        <div class="board-number">
          <p class="ml-[2rem]">ALL BOARDS (#)</p>
        </div>

        <div class="h-full flex flex-col gap-y-2">
          <div class="board-select selected">
            <svg class="ml-7" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>

            <p>
              Title Here
            </p>
          </div>

          <div class="board-select">
            <svg class="ml-7" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>

            <p>
              Title Here
            </p>
          </div>

          <div class="board-select">
            <svg class="ml-7" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>

            <p>
              Title Here
            </p>
          </div>


          <button class="board-create">
            <svg class="ml-7" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>

            <p>
              + Create New Board
            </p>
          </button>
        </div>

        <div>
          <button class="toggle-btn" @click="swtichTheme()">Toggle</button>
        </div>
      </div>

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

.nav-buttons {
  @apply flex flex-row items-center justify-between gap-x-4 mr-8
}

.new-task {
  @apply bg-themeColor hover:bg-themeColor-hover text-white py-3 px-5 rounded-full font-bold
}

.nav-settings {
  @apply hover:bg-settingsBackground dark:hover:bg-settingsBackground-dark max-w-[1.3rem] py-1 rounded-full flex justify-center items-center
}

/* Main & Sidebar */
.wrapper>.main {
  @apply h-full w-full flex flex-row relative
}

.sidebar {
  @apply min-w-[18.75rem] h-full text-textColor bg-background2 dark:bg-background2-dark border-r border-borderColor dark:border-borderColor-dark;
  /* @apply w-0 min-w-0 relative -left-full */
}

.board-number {
  @apply h-[3.125rem] font-bold text-xs tracking-[0.2em] flex items-center
}

.board-select {
  @apply w-[17.5rem] py-3 flex flex-row items-center gap-x-4 hover:bg-themeColor-hover rounded-r-full font-bold text-textColor
}

.board-select.selected {
  @apply bg-themeColor text-white
}

.board-create {
  @apply w-[17.5rem] py-3 flex flex-row items-center gap-x-4 font-bold text-themeColor hover:text-themeColor-hover
}

.toggle-btn {
  @apply fixed bottom-12 left-12 w-min h-min border-2 rounded-full flex justify-center items-center
}



.kanban {
  @apply w-full h-full;
  /* @apply relative left-0 */
}
</style>