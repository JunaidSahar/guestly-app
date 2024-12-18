<template>
  <div>
    <pre>
    {{ store.user }}
  </pre
    >
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/userStore";

const store = useUserStore();
</script>
