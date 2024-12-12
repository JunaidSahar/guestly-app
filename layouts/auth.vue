<template>
  <div class="h-screen flex items-center justify-between">
    <div class="w-1/2 flex items-center justify-center">
      <UContainer>
        <NuxtPage />
      </UContainer>
    </div>
    <header
      class="relative flex h-full items-center w-1/2 justify-center overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 bg-black opacity-25 z-30 w-full h-full"
      ></div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="@/assets/anim3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  </div>
  <UNotifications />
</template>
