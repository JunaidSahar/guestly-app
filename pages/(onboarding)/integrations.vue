<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
</script>

<template>
  <div>
    {{ useUserStore().user }}
  </div>
</template>
