<template>
  <div class="bg-white p-6 z-50 relative rounded-lg">
    <AuthHeader
      :link="{
        title: 'Login',
        href: '/login',
      }"
      title="Welcome to Guestly"
      short-description="Start communicating with your guests today. All in WhatsApp"
    />
    <div class="pt-6">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Full Name" name="fullName">
          <UInput
            placeholder="Enter your full name"
            size="lg"
            v-model="state.fullName"
          />
        </UFormGroup>

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
        <div>
          <UCheckbox
            label="I agree to the Guestly Terms & Conditions and the Privacy Policy"
            name="termsAndConditions"
          />
        </div>

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
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { definePageMeta, registerSchema } from "#build/imports";
import { useRegister } from "~/composables/global-hooks/useAuth";

const schema = registerSchema;
const isSubmitted = ref(false);

type Schema = InferType<typeof schema>;

const state = reactive({
  fullName: undefined,
  email: undefined,
  password: undefined,
});

const taost = useToast();
const router = useRouter();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const url = useRuntimeConfig().public.API_URL + "auth/owner-signup";
  isSubmitted.value = true;
  try {
    const res = await useRegister(url, event.data);
    console.log(res, "res");
    if (res?.statusCode === 400) {
      taost.add({ title: "User with this email already exist!" });
    } else {
      taost.add({ title: "We have sent you an confirmation email" });
      router.push("/confirm-email");
    }
    isSubmitted.value = false;
  } catch (error) {
    isSubmitted.value = false;
    console.log(error, "is error");
  }
}
definePageMeta({
  title: "Register",
  metaDescription: "Create an account",
  layout: "auth",
});
</script>
