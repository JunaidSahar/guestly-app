<template>
  <div>
    <AuthHeader
      :link="{
        title: 'Register',
        href: '/register',
      }"
      title="Log in to your account"
      short-description="Welcome back! Please enter your name and password"
    />
    <div class="pt-6">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput
            placeholder="Enter your business email"
            size="lg"
            v-model="state.email"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            placeholder="Enter a password"
            size="lg"
            aria-autocomplete="false"
            v-model="state.password"
            type="password"
          />
        </UFormGroup>

        <UButton
          :loading="isSubmitted"
          loading-icon="svg-spinners:ring-resize"
          type="submit"
          size="lg"
        >
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { definePageMeta } from "#build/imports";
import { useLogin } from "~/composables/global-hooks/useAuth";
import { useUserStore } from "~/store/userStore";

const isSubmitted = ref(false);
const schema = loginSchema;

type Schema = InferType<typeof schema>;
const state = reactive({
  email: undefined,
  password: undefined,
});
const taost = useToast();
const router = useRouter();
const store = useUserStore();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const url = useRuntimeConfig().public.API_URL + "auth/login";
  isSubmitted.value = true;
  try {
    const res = await useLogin(url, event.data);
    console.log(res);
    isSubmitted.value = false;
    if (res.statusCode === 400) {
      taost.add({ title: "Invalid credentials, email or password is invalid" });
    } else if (res.statusCode === 403) {
      router.push("/confirm-email");
    } else if (res.statusCode === 402) {
      taost.add({
        title: "Payment required",
        description: "Please buy a subscription to continue",
      });
      store.user = res.user;
      useCookie("token").value = res.token;
      window.location.href = "/choose-plan";
    } else {
      store.user = res.user;
      useCookie("token").value = res.token;
      window.location.href = "/";
    }
  } catch (error) {
    isSubmitted.value = false;
    console.log(error, "is error");
  }
}

definePageMeta({
  title: "Login",
  metaDescription: "Login to your account",
  layout: "auth",
});
</script>
