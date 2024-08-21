<script setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  subtask: Object,
  task: Object,
  toggleSubtaskDone: Function,
})
</script>
<template>
  <li class="flex justify-between items-center mb-2">
    <span :class="{ 'line-through': subtask.done, 'text-textPrimary': true }">
      {{ subtask.title }}
    </span>
    <button
      @click="toggleSubtaskDone(subtask, task)"
      :class="{ 'bg-green-500': subtask.done, 'bg-red-500': !subtask.done }"
      class="w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300"
    >
      <div
        :class="{
          'translate-x-4': subtask.done,
          'translate-x-0': !subtask.done,
        }"
        class="bg-white w-4 h-4 rounded-full transform transition-transform duration-300"
      >
        <CheckIcon v-if="subtask.done" class="w-4 h-4 text-green-500" />
        <XMarkIcon v-else class="w-4 h-4 text-red-500" />
      </div>
    </button>
  </li>
</template>
