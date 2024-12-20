<template>
  <div class="h-full w-full">{{ store.user }}</div>
</template>

<script setup>
import { useUserStore } from "~/store/userStore";

const store = useUserStore();
</script>
