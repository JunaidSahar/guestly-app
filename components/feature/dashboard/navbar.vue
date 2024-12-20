<template>
  <div class="py-6 border-r sticky inset-0 h-screen w-80">
    <div class="flex items-center gap-2 px-4 pb-4 border-b">
      <img
        :src="
          `https://guestly-app-dev.s3.eu-central-1.amazonaws.com/` +
          currentBuisness?.image
        "
        alt="businessimage"
        class="w-8 h-8 rounded-lg"
      />
      <div>
        <h1 class="text-lg font-semibold text-gray-900">
          {{ currentBuisness?.companyName }}
        </h1>
      </div>
    </div>
    <div class="pt-8 px-4">
      <ul class="space-y-6">
        <li
          v-for="(link, index) in links"
          @click="selectedIndex = index"
          :key="index"
        >
          <NuxtLink
            :class="
              route.path.includes(link.to) ? 'text-medium-purple-300' : ''
            "
            class="text-gray-700 hover:text-gray-950 cursor-pointer flex justify-between items-center gap-2"
          >
            <span class="flex items-center gap-2">
              <Icon :name="link.icon" class="w-6 h-6" />
              {{ link.name }}
            </span>
            <Icon
              v-if="link.subNav"
              class="w-5 h-5"
              :class="index == selectedIndex ? 'rotate-180' : 'rotate-0'"
              name="material-symbols:keyboard-arrow-down-rounded"
            />
          </NuxtLink>
          <ul
            v-if="link.subNav && link.subNav.length"
            class="space-y-4 ml-2 pl-6 transition-all duration-500 border-l text-sm pt-4 text-gray-600"
            :class="
              selectedIndex == index
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 hidden -translate-x-full'
            "
          >
            <li v-for="(subLink, index) in link.subNav" :key="index">
              <NuxtLink
                :class="
                  route.path.includes(subLink.to)
                    ? 'text-medium-purple-300'
                    : ''
                "
                class="text-gray-600 hover:text-gray-950 flex w-fit cursor-pointer items-center gap-2"
              >
                {{ subLink.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/userStore";
const selectedIndex = ref(0);

const currentBuisness = useUserStore().user.currentBuisness;

const route = useRoute();
const links = [
  {
    icon: "iconoir:home-simple-door",
    name: "Dashboard",
    to: "/",
  },
  {
    icon: "mynaui:message-dots",
    name: "Conversation",
    to: "/conversation",
    subNav: [
      {
        name: "Direct coversations",
        to: "/conversations",
      },
      {
        name: "Schedule messages",
        to: "/conversations",
      },
      {
        name: "Templates",
        to: "/conversations",
      },
    ],
  },
  {
    icon: "hugeicons:marketing",
    name: "Campaigns",
    to: "/campaigns",
  },
  {
    icon: "solar:calendar-date-outline",
    name: "Bookings",
    to: "/bookings",
  },
  {
    icon: "mage:contact-book",
    name: "Contacts",
    to: "/contacts",
  },
  {
    icon: "hugeicons:task-01",
    name: "Tasks",
    to: "/tasks",
  },
  {
    icon: "hugeicons:setting-07",
    name: "Settings",
    to: "/settings",
    subNav: [
      {
        name: "Account",
        to: "/profile",
      },
      {
        name: "Business Account",
        to: "/business-account",
      },
      {
        name: "Plan & Billings",
        to: "/plan-and-billings",
      },
      {
        name: "Team",
        to: "/team",
      },
      {
        name: "Tools & Integration",
        to: "/tools-and-integration",
      },
      {
        name: "Tags",
        to: "/tags",
      },
    ],
  },
];
</script>
