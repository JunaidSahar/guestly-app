<template>
  <div class="bg-white p-6 z-50 relative rounded-lg">
    <AuthHeader
      :link="{
        title: 'Login',
        href: '/login',
      }"
      title="Registration Confirmation"
      :short-description="`We have just sent a confirmation email to your registered email address`"
    />
  </div>
</template>

<script setup>
definePageMeta({
  title: "Register",
  metaDescription: "Create an account",
  layout: "auth",
});
</script>
