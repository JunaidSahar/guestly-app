<template>
  <div class="flex items-center justify-between pb-6">
    <img
      src="@/assets/brand/logo_primary.svg"
      class="h-10 w-auto"
      alt="brand"
    />
    <NuxtLink :to="link.href" class="underline">{{ link.title }}</NuxtLink>
  </div>
  <div>
    <span class="text-gray-700 text-lg">1/4</span>
    <h1 class="text-3xl font-semibold text-gray-900">{{ title }}</h1>
    <p class="text-gray-700 font-medium">
      {{ shortDescription }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
});
</script>
