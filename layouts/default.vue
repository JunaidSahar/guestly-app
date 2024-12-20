<script setup lang="ts">
import BusinessesNav from "~/components/feature/dashboard/businesses-nav.vue";
</script>

<template>
  <div class="flex">
    <BusinessesNav />
    <FeatureDashboardNavbar />
    <div class="flex-1 p-4">
      <NuxtPage />
    </div>
  </div>
</template>
