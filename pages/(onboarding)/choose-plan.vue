<template>
  <div class="max-w-7xl mx-auto py-10">
    <div>
      <h1 class="text-2xl text-gray-900 font-semibold">Choose a plan</h1>
      <p class="text-gray-500">Choose the plan that fits your needs.</p>
    </div>
    <div class="flex items-center pt-10 border-b w-fit">
      <p
        class="px-8 py-2 bg-white cursor-pointer"
        v-for="(item, index) in ['monthly', 'yearly']"
        :key="index"
        @click="handleTogglePlan(item)"
        :class="
          item.includes(selectedPlan)
            ? 'border-b-2 text-gray-900 border-medium-purple-600'
            : 'text-gray-400'
        "
      >
        {{ item }}
      </p>
    </div>
    <div class="pt-6 grid grid-cols-3 gap-4">
      <FeatureOnboardingPricingCard
        v-for="(item, index) in planData.filter(
          (plan) => plan.recurringType == selectedPlan
        )"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "Choose Plan",
  metaDescription: "Choose a plan",
  layout: "onboarding",
});
const planData = ref([]);
const selectedPlan = ref("month");

const handleTogglePlan = (plan) => {
  if (plan == "monthly") {
    selectedPlan.value = "month";
  }
  if (plan == "yearly") {
    selectedPlan.value = "year";
  }
};

const config = useRuntimeConfig().public;
async function getPlans() {
  try {
    const res = await fetch(config.API_URL + "package/all-package/?type=all");
    if (!res.ok) {
      throw new Error("Failed to fetch plans");
    } else {
      const data = await res.json();
      planData.value = data?.packages?.sort((a, b) => a.price - b.price);
    }
  } catch (error) {
    console.error("Error fetching plans", error);
  }
}

getPlans();
</script>
