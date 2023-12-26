<template>
  <div @click.capture="navDropDown = false" class="wrapper">
    <header>
      <div class="logo-container">
        <img :class="{ 'hidden': !preferDark }" src="./assets/images/logo-light.svg">
        <img :class="{ 'hidden': preferDark }" src="./assets/images/logo-dark.svg">
      </div>
      <div class="nav">
        <h1>{{ boards[currentBoard].title }}</h1>

        <div class="nav-buttons">
          <button class="new-task">
            + Add New Task
          </button>

          <button @click="navDropDown = true" class="nav-settings">
            <svg class="min-w-[1.6rem] min-h-[1.6rem] fill-textColor" fill="currentColor" width="16" height="16"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </button>

          <div class="nav-dropdown" :class="{ 'hidden': !navDropDown }">
            <button class="text-textColor hover:opacity-50">Edit Board</button>
            <button class="text-textColor hover:opacity-50">Clear Board</button>
            <button class="text-red-500 hover:opacity-50">Delete Board</button>
            <button class="text-red-500 hover:opacity-50">Reset Boards</button>
          </div>

        </div>
      </div>
    </header>

    <div class="main">
      <div class="sidebar">
        <div class="board-number">
          <p class="ml-[2rem]">ALL BOARDS (#)</p>
        </div>

        <div class="flex flex-col gap-y-2 mb-auto">
          <button v-for="(board, index) in boards" :key="index" @click="currentBoard = index" class="board-select"
            :class="{ 'selected': index === currentBoard }">
            <svg class="ml-7" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 
                2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 
                1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 
                2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 
                0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>
            <p>
              {{ board.title }}
            </p>
          </button>

          <button class="board-create" :disabled="boards.length >= 6">
            <svg class="ml-7" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 
                13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 
                1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 
                5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z">
              </path>
            </svg>

            <p>
              + Create New Board
            </p>
          </button>
        </div>

        <div class="mb-6">
          <div class="theme-toggle">
            <svg class="min-w-[1.4rem] min-h-[1.4rem] fill-textColor" width="16" height="16" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 
                0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 
                0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 
                9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 
                0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>

            <button class="toggle-btn" @click="swtichTheme()">
              <div></div>
            </button>

            <svg class="min-w-[1.1rem] min-h-[1.1rem] fill-textColor" width="16" height="16" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 
                1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 
                4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 
                1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 
                0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 
                0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 
                1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          </div>
          <button @click="toggleSidebar()" class="sidebar-hide">
            <svg class="min-w-[1.4rem] min-h-[1.4rem] fill-textColor" width="16" height="16" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 
              1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 
              1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 
              3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 
                11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721
                 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
            </svg>

            <p>Hide Sidebar</p>
          </button>
        </div>
      </div>
      <button @click="toggleSidebar()" class="sidebar-show">
        <svg class="min-w-[1.5rem] min-h-[1.5rem] fill-white ml-auto mr-4" width="16" height="16" viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
        </svg>
      </button>

      <div class="kanban left-[18.75rem]">
        <div v-for="(status, index) in  boards[currentBoard].statuses " :key="index" class="status">

          <div class="status-title">
            <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: status.color }"></div>
            <p>{{ status.name.toUpperCase() }} ({{ status.cards.length }})</p>
          </div>

          <div class="status-cards">
            <div v-for="(card, index) in status.cards" :key="index">
              <p class="text-sm font-bold">
                {{ card.title }}
              </p>

              <p class="text-xs font-semibold text-textColor">
                0 of {{ card.subtasks.length }} subtasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const navDropDown = ref(false)
const preferDark = ref(false)

function swtichTheme() {
  preferDark.value = !preferDark.value
  const html = document.querySelector('html')
  html.classList.toggle('dark')
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  const kanban = document.querySelector('.kanban')


  sidebar.classList.toggle('sidebar-hidden')
  kanban.classList.toggle('!left-[0rem]')
}

// Board Logic
const currentBoard = ref(0)
const boards = ref([
  {
    title: 'Example Board',
    statuses: [{
      name: 'To Do',
      color: '#49c4e6',
      cards: [
        {
          title: 'Example Card 1',
          description: 'Example Description 1',
          subtasks: [
            { name: 'Example Subtask 1', done: false },
            { name: 'Example Subtask 2', done: false }
          ]
        },
        {
          title: 'Example Card 1',
          description: 'Example Description 1',
          subtasks: [
            { name: 'Example Subtask 1', done: false },
            { name: 'Example Subtask 2', done: false }
          ]
        }
      ]
    },
    {
      name: 'Doing',
      color: '#8471f2',
      cards: [
        {
          title: 'Example Card 1',
          description: 'Example Description 1',
          subtasks: [
            { name: 'Example Subtask 1', done: false },
            { name: 'Example Subtask 2', done: false }
          ]
        }
      ]
    },
    {
      name: 'Done',
      color: '#67e2ae',
      cards: []
    },
    ],
  },

  {
    title: 'Example Board 2',
    statuses: ['To Do'],
    cards: [
      {
        title: 'Example Card 2',
        description: 'Example Description 2',
        subtasks: [
          { name: 'Example Subtask 3', done: false },
          { name: 'Example Subtask 4', done: false }
        ],
        status: 'To Do'
      }
    ]
  }
])

</script>

<style></style>