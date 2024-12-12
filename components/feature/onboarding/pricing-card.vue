<template>
  <div class="p-6 rounded-md min-w-52 border">
    <div class="space-y-3">
      <h2 class="font-semibold text-lg text-gray-900">
        {{ props.data?.title }}
      </h2>
      <h2 class="text-3xl font-semibold text-gray-900">
        {{ props.data?.price }}/Month
      </h2>
      <p class="text-gray-700">{{ props.data?.shortDescription }}</p>
    </div>
    <ul class="pt-6 space-y-2">
      <li
        v-for="(item, index) in props.data?.features"
        :key="index"
        class="flex gap-2 text-gray-700"
      >
        <Icon
          size="20"
          class="text-medium-purple-500 mt-0.5"
          name="material-symbols:check-circle-outline"
        />
        <span class="flex-1">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
