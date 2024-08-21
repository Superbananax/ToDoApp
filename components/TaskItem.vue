<script setup>
import { ref } from 'vue'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  task: Object,
  toggleTaskDone: Function,
})

const isExpanded = ref(false)

const toggleTask = () => {
  isExpanded.value = !isExpanded.value
}
</script>
<template>
  <div class="task-item">
    <div
      class="flex justify-between items-center cursor-pointer"
      @click="toggleTask"
    >
      <div class="flex items-center">
        <svg
          :class="{ 'rotate-90': isExpanded }"
          class="w-5 h-5 text-gray-600 transition-transform"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <h2 class="text-xl font-semibold text-textPrimary ml-2">
          <span
            :class="{ 'line-through': task.done, 'text-textPrimary': true }"
          >
            {{ task.title }}
          </span>
        </h2>
      </div>
      <button
        @click.stop="toggleTaskDone(task.id)"
        :class="{ 'bg-green-500': task.done, 'bg-red-500': !task.done }"
        class="w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300"
      >
        <div
          :class="{ 'translate-x-4': task.done, 'translate-x-0': !task.done }"
          class="bg-white w-4 h-4 rounded-full transform transition-transform duration-300"
        >
          <CheckIcon v-if="task.done" class="w-4 h-4 text-green-500" />
          <XMarkIcon v-else class="w-4 h-4 text-red-500" />
        </div>
      </button>
    </div>
    <transition name="fade">
      <div v-if="isExpanded">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
