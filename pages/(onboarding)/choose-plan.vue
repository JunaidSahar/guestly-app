<template>
  <div class="max-w-7xl mx-auto py-10">
    <div>
      <h1 class="text-2xl text-gray-900 font-semibold">Choose a plan</h1>
      <p class="text-gray-500">Choose the plan that fits your needs.</p>
    </div>
    <div class="flex items-center pt-10 border-b w-fit">
      <p
        class="px-8 py-2 bg-white cursor-pointer"
        v-for="(item, index) in ['Monthly', 'Yearly']"
        :key="index"
        @click="selectedTab = index"
        :class="
          index == selectedTab
            ? 'border-b-2 text-gray-900 border-medium-purple-600'
            : 'text-gray-400'
        "
      >
        {{ item }}
      </p>
    </div>
    <div class="pt-6 grid grid-cols-3 gap-4">
      <FeatureOnboardingPricingCard
        v-for="(item, index) in PricingData"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>
<script setup>
const selectedTab = ref(0);
definePageMeta({
  title: "Choose Plan",
  metaDescription: "Choose a plan",
  layout: "onboarding",
});

const PricingData = [
  {
    title: "Starter Plan",
    price: "$29.99",
    shortDescription: "For small  businesses with one property",
    features: [
      "1 business property",
      "1 thousand conversations per business property",
      "Template studio",
      "Automated messages",
      "Push notification",
      "Unlimited team members",
    ],
    buttonText: "Start free trial",
  },
  {
    title: "Business Plan",
    price: "$99.99",
    shortDescription: "For mid size businesses with one property",
    features: [
      "1 business property",
      "1 thousand conversations per business property",
      "Template studio",
      "Automated messages",
      "Push notification",
      "Unlimited team members",
    ],
    buttonText: "Start free trial",
  },
  {
    title: "Enterprice Plan",
    price: "$199.99",
    shortDescription: "For large businesses with more then one property",
    features: [
      "1 business property",
      "1 thousand conversations per business property",
      "Template studio",
      "Automated messages",
      "Push notification",
      "Unlimited team members",
    ],
    buttonText: "Start free trial",
  },
];
</script>
