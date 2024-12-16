<template>
  <div
    @click="createCheckoutSession(props.data.planId)"
    class="p-6 hover:border-medium-purple-600 border-[3px] hover:-translate-y-2 duration-500 rounded-md hover:bg-white transition-all cursor-pointer min-w-52"
    :class="
      props.data.title == 'Business' ? 'border-medium-purple-600' : 'border-2'
    "
  >
    {{ useCookie("user").value?.currentOrganization?.subscription }}
    <div class="space-y-3">
      <h2 class="font-semibold text-lg text-gray-900">
        {{ props.data?.title }}
      </h2>
      <h2 class="text-3xl font-semibold text-gray-900">
        {{ props.data?.price }}€/Month
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
import { createCheckout } from "~/composables/global-hooks/usePricing";
const isCheckoutCreateing = ref(false);
const router = useRouter();
async function createCheckoutSession(planId) {
  isCheckoutCreateing.value = true;
  try {
    const url = await createCheckout(planId);
    navigateTo(url, { external: true });
  } catch (error) {
    console.error("Error creating checkout session:", error);
  } finally {
    isCheckoutCreateing.value = false;
  }
}

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
