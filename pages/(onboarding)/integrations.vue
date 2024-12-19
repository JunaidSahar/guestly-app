<script setup lang="ts">
import { skipIntegration } from "~/composables/global-hooks/useBusiness";
import { useUserStore } from "~/store/userStore";

definePageMeta({
  title: "Integration",
  metaDescription: "Integrate WhatsApp and other tools into guestly",
  layout: "onboarding",
});

const isLoading = ref(false);
const store = useUserStore();
const skipWhatsApp = async () => {
  isLoading.value = true;
  const token = useCookie("token").value;
  const business_id = store?.user?.currentBuisness?._id;
  const res = await skipIntegration(business_id, token);
  if (res?.data) {
    store.user = res.data;
    window.location.href = "/";
  }
  console.log(res);
};
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
      <div class="flex items-center gap-4 pt-10">
        <div class="p-5 rounded-lg space-y-4 border bg-white">
          <div
            class="flex text-gray-900 items-center gap-2 text-xl font-semibold"
          >
            <Icon name="logos:whatsapp-icon" class="w-12 h-12" />
            WhatsApp
          </div>
          <p class="text-gray-600">
            Click on the button below and follow the instructions to link the
            WhatsApp Business account to your Guestly account.
          </p>
          <div class="flex gap-2 justify-between pt-5">
            <div class="flex gap-2">
              <UButton>Connect</UButton>
              <UButton
                variant="outline"
                icon="material-symbols:contact-support-outline-rounded"
                >Learn more</UButton
              >
            </div>
            <UButton @click="skipWhatsApp" variant="link">Skip</UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
