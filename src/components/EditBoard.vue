<template>
  <div @click.self="$emit('closeBoard')" class="background">
    <div class="container">
      <h3>Edit Board</h3>

      <form @submit.prevent="console.log(toRaw(columns))">
        <label for="Name">Name</label>
        <textarea cols="1" rows="1" type="text" name="title" id="name" v-model="name" class="h-[2.5rem]"></textarea>

        <label for="Columns">Columns</label>
        <div class="flex flex-col gap-y-[1rem] pr-4">
          <div v-for="(column, index) in columns" :key="index" class="flex flex-row gap-x-4">
            <textarea type="text" name="columns" id="columns" v-model="columns[index].name" class="h-[2.5rem]"></textarea>

            <button type="button" @click="columns.splice(index, 1)" class="text-textColor disabled:opacity-25" :disabled="column.cards">
              <svg fill="currentColor" height="16px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 460.775 460.775">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 
                  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
              </svg>
            </button>
          </div>
        </div>
        <button v-if="columns.length < 6" type="button" @click="columns.push('')" class="newSubTask">+ Add New Column</button>

        <button class="create-task">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, toRaw } from 'vue';

const dropDown = ref(false)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  }
})

const name = ref(props.title)




const columns = ref(props.columns)


// const status = ref(props.status)
// const states = ref(props.states)

// function makeTask() {
//   const task = {
//     title: title.value,
//     description: description.value,
//     subtasks: toRaw(subtasks.value),
//     index: status.value.index
//   }

//   return task
// }

</script>

<style scoped>
.background {
  @apply fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50 flex justify-center items-center
}

.container {
  @apply w-[30rem] p-8 rounded-xl flex flex-col gap-y-[1.2rem];
  @apply bg-background2 dark:bg-background2-dark;
}

.container h3 {
  @apply font-bold text-lg min-w-fit
}

form {
  @apply flex flex-col gap-y-[0.7rem]
}

form label {
  @apply text-xs text-white font-semibold
}

form textarea {
  @apply w-full px-4 py-2 border-2 border-gray-300 dark:border-[#828fa366] rounded text-sm resize-none bg-transparent outline-none focus:border-themeColor
}

form .drop-down {
  @apply absolute bottom-[115%] left-0 right-0 py-4 px-4 bg-background border-2 border-borderColor dark:border-none dark:bg-background-dark rounded flex flex-col gap-y-1
}

form .drop-down-option {
  @apply text-sm text-textColor hover:font-bold hover:text-black dark:hover:text-white flex items-start
}

form .dropDownSelect {
  @apply border-2 border-gray-300 dark:border-[#828fa366] rounded flex justify-between py-2 px-3 text-xs font-semibold focus:border-themeColor
}

form .newSubTask {
  @apply bg-themeColor-hover bg-opacity-20 dark:bg-white dark:bg-opacity-100 text-themeColor text-sm py-2 mt-2 hover:opacity-60 rounded-full font-bold
}

form .create-task {
  @apply bg-themeColor text-white text-sm py-2 mt-2 hover:opacity-60 rounded-full font-bold
}

</style>