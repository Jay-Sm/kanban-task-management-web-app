<template>
  <div @click.self="$emit('closeBoard')" class="background">
    <div class="container">
      <h3>Add New Task</h3>

      <form @submit.prevent="console.log($event)">
        <label for="Title">Title</label>
        <textarea cols="1" rows="1" type="text" name="title" id="title" v-model="title" class="h-[2.5rem]"></textarea>

        <label for="Description">Description</label>
        <textarea type="text" name="description" id="description" v-model="description" class="h-[7.5rem]"></textarea>

        <label for="Subtasks">Subtasks</label>
        <div class="flex flex-row gap-x-4">
          <textarea type="text" name="subtasks" id="subtasks" v-model="subtasks" class="h-[2.5rem]"></textarea>

          <button class="text-textColor">
            <svg fill="currentColor" height="16px" width="16px" version="1.1" id="Capa_1"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 
                  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
            </svg>
          </button>
        </div>
        <button class="newSubTask">
          + Add New Subtask
        </button>

        <label for="Status">Status</label>
        <div class="flex flex-col relative">
          <button type="button" @click="dropDown = !dropDown" v-on:blur="dropDown = false" class="dropDownSelect">
            To Do
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-themeColor" :class="{ 'rotate-180': dropDown }"
                width="12" height="12" viewBox="0 0 512 512">
                <path fill="none" stroke="#635fc7" stroke-linecap="square" stroke-miterlimit="10" stroke-width="80"
                  d="M112 184l144 144 144-144" />
              </svg>
            </div>
          </button>

          <div>

          </div>
        </div>

        <button class="bg-themeColor text-white text-sm py-2 mt-2 hover:opacity-60 rounded-full font-bold">
          Create Task
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const dropDown = ref(false)

const props = defineProps({
  states: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>
.background {
  @apply fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 flex justify-center items-center
}

.container {
  @apply w-[30rem] h-[38.5rem] p-8 rounded-xl flex flex-col gap-y-[1.2rem];
  @apply bg-background2 dark:bg-background2-dark;
}

.container h3 {
  @apply font-bold text-lg min-w-fit
}

form {
  @apply flex flex-col gap-y-[0.7rem]
}

form label {
  @apply text-xs text-textColor font-semibold
}

form textarea {
  @apply w-full px-4 py-2 border-2 border-gray-300 dark:border-borderColor-dark rounded text-sm resize-none bg-transparent
}

form .dropDownSelect {
  @apply border-2 border-gray-300 dark:border-borderColor-dark rounded flex justify-between py-2 px-3 text-xs font-semibold focus:border-themeColor
}

form .newSubTask {
  @apply bg-themeColor-hover bg-opacity-20 dark:bg-white dark:bg-opacity-100 text-themeColor text-sm py-2 mt-2 hover:opacity-60 rounded-full font-bold
}
</style>