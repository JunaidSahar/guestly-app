<template>
  <div
    class="p-6 rounded-md hover:bg-white transition-all cursor-pointer min-w-52"
    :class="
      props.data.title == 'Business'
        ? 'border-medium-purple-600 border-[3px]'
        : 'border-2'
    "
  >
    <div class="space-y-3">
      <h2 class="font-semibold text-lg text-gray-900">
        {{ props.data?.title }}
      </h2>
      <h2 class="text-3xl font-semibold text-gray-900">
        {{ props.data?.price }}/Month
      </h2>
      <p class="text-gray-700">{{ props.data?.description }}</p>
    </div>
    <div class="pt-6">
      <p class="text-gray-900 text-lg font-semibold">Features</p>
      <ul class="pt-4 space-y-2">
        <li
          v-for="(item, index) in props.data?.permissions"
          :key="index"
          class="flex gap-2 text-gray-700 capitalize"
        >
          <Icon
            size="20"
            class="text-medium-purple-500 mt-0.5"
            name="material-symbols:check-circle-outline"
          />
          <span class="flex-1">{{ item?.main }}</span>
        </li>
      </ul>
    </div>
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
