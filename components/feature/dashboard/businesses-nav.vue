<template>
  <div
    class="border-r flex flex-col justify-between bg-[#F3F4F6] py-6 px-4 sticky top-0 inset-0 h-screen"
  >
    <div class="space-y-4">
      <div class="pb-4">
        <img src="/guestly-icon.png" alt="favicon" class="w-10 h-10 rounded" />
      </div>
      <ul class="flex gap-y-4 flex-col items-center">
        <li v-for="(link, index) in businesses" :key="index">
          <div
            class="w-10 h-10 cursor-pointer"
            :class="
              link._id == currentBusinessId
                ? 'border-[3px] border-medium-purple-500 rounded-lg p-1'
                : 'p-1'
            "
          >
            <img
              v-if="link.image"
              class="rounded h-full w-full object-cover"
              :src="`https://guestly-app-dev.s3.eu-central-1.amazonaws.com/${link.image}`"
              alt=""
            />
            <div
              v-else
              :class="
                link._id == currentBusinessId
                  ? 'border-[3px] border-medium-purple-500 rounded-lg p-1'
                  : 'p-1'
              "
              class="capitalize flex items-center justify-center rounded bg-white"
            >
              {{ link?.companyName[0] }}
            </div>
          </div>
        </li>
      </ul>
      <hr />
      <div
        class="w-10 h-10 bg-white border text-gray-700 flex items-center justify-center rounded"
      >
        <Icon class="w-5 h-5" name="material-symbols:add" />
      </div>
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-1">
        EN
        <Icon name="material-symbols:keyboard-arrow-down-rounded" />
      </div>
      <div v-if="useUserStore().user?.image">
        <img
          :src="
            `https://guestly-app-dev.s3.eu-central-1.amazonaws.com/` +
            useUserStore().user?.image
          "
          class="w-10 h-10 rounded-full"
          alt="userImage"
        />
      </div>
      <div
        v-else
        class="w-10 h-10 rounded-full text-white flex items-center justify-center text-lg bg-blue-400"
      >
        {{ useUserStore().user.name[0] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/userStore";

const route = useRoute();
const businesses = useUserStore().user.organization.flatMap(
  (org) => org.buisness
);

const currentBusinessId = useUserStore().user.currentBuisness?._id;
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
  },
];
</script>
