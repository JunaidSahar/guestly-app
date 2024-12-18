<script setup lang="ts">
import { useUserStore } from "~/store/userStore";

definePageMeta({
  title: "Integration",
  metaDescription: "Integrate WhatsApp and other tools into guestly",
  layout: "onboarding",
});
</script>

<template>
  <div class="max-w-7xl mx-auto py-10">
    <div class="max-w-md space-y-2">
      <h1 class="text-2xl text-gray-900 font-semibold">
        Integrations & Workflow
      </h1>
      <p class="text-gray-500">
        You're almost ready to get started with Guestly. Take a moment to
        configure WhatsApp.
      </p>
      <div>
        <div class="p-5 rounded-lg space-y-4 border bg-white">
          <div
            class="flex text-gray-900 items-center gap-2 text-xl font-medium"
          >
            <Icon name="logos:whatsapp-icon" class="w-12 h-12" />
            WhatsApp
          </div>
          <p class="text-gray-600">
            Connect your universe with WhatsApp Business Account to get started
            with messaging on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
