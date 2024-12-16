<template>
  <div class="py-5 px-10 flex items-center border-b gap-4 justify-between">
    <img
      src="@/assets/brand/logo_primary.svg"
      class="h-10 w-auto"
      alt="brand"
    />
    <div class="flex items-center gap-8">
      <div
        v-for="(nav, index) in navigation"
        :key="index"
        class="flex items-center gap-2"
      >
        <h1
          :class="
            nav.path == route.path ? 'bg-medium-purple-500 ' : 'bg-gray-300 '
          "
          class="h-6 w-6 flex items-center text-sm justify-center rounded-full text-white font-semibold"
        >
          {{ nav.id }}
        </h1>
        <p
          class="font-semibold"
          :class="nav.path == route.path ? 'text-gray-900' : 'text-gray-400'"
        >
          {{ nav.name }}
        </p>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <p class="font-semibold text-gray-900 capitalize">{{ user?.name }}</p>
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
          class="h-9 w-9 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useCookie("user").value;
const route = useRoute();

const navigation = [
  {
    id: "1",
    name: "Subscription",
    path: "/subscription",
  },
  {
    id: "2",
    name: "Business Information",
    path: "/create-business",
  },
  {
    id: "3",
    name: "Integration",
    path: "/integration",
  },
];
</script>
