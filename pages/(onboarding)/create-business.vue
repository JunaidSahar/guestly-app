<template>
  <div class="max-w-7xl mx-auto py-10">
    <div class="max-w-md space-y-2">
      <h1 class="text-2xl text-gray-900 font-semibold">
        Verify your business details
      </h1>
      <p class="text-gray-500">
        Guestly collects this information to verify your identity and keep your
        account safe.
      </p>
    </div>
    <div class="mt-8 space-y-8 w-full p-6 rounded-lg bg-white border">
      <UploadImage :get-image="(e:any) => selectedAvatar = e" />
      <hr />
      <div class="flex items-start justify-between gap-20">
        <div class="w-1/3 space-y-1">
          <h1 class="text-lg font-semibold text-gray-950">
            Business Informations
          </h1>
          <p class="text-gray-500 text-sm">
            Provide accurate details to help us verify your business and
            maintain account security.
          </p>
        </div>
        <div class="flex-1">
          <UForm
            @submit="onSubmit"
            :schema="schema"
            :state="businessState"
            class="space-y-4"
          >
            <UFormGroup label="Business Name" name="business_name">
              <UInput
                placeholder="Enter your business name"
                size="lg"
                v-model="businessState.business_name"
              />
            </UFormGroup>

            <UFormGroup label="Business Type" name="business_type">
              <USelect
                size="lg"
                placeholder="Selected business type"
                v-model="businessState.business_type"
                :options="['hotel', 'apartment', 'B2B', 'resort', 'camping']"
              />
            </UFormGroup>

            <UFormGroup
              label="Business Classification"
              name="business_classification"
            >
              <USelect
                size="lg"
                v-model="businessState.business_classification"
                :options="[
                  'not-applicable',
                  '1-star',
                  '2-star',
                  '3-star',
                  '4-star',
                  '5-star',
                ]"
                placeholder="Selected business classification"
              />
            </UFormGroup>

            <UFormGroup label="Business Size" name="business_size">
              <USelect
                size="lg"
                v-model="businessState.business_size"
                :options="['1-20', '21-50', '51-100', '100+']"
                placeholder="Selected business size"
              />
            </UFormGroup>

            <UFormGroup label="Property managment system" name="pms">
              <USelect
                size="lg"
                v-model="businessState.pms"
                :options="['asa', 'xenus', 'other', 'none']"
                placeholder="Selected PMS"
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
      <hr />
      <div class="flex items-start justify-between gap-20">
        <div class="w-1/3 space-y-1">
          <h1 class="text-lg font-semibold text-gray-950">Business Address</h1>
          <p class="text-gray-500 text-sm">
            Enter the complete address of your business to ensure accurate
            verification.
          </p>
        </div>
        <div class="flex-1">
          <UForm
            @submit="onSubmit"
            :schema="schema"
            :state="addressState"
            class="space-y-4"
          >
            <UFormGroup label="Country" name="country">
              <USelectMenu
                value-attribute="isoCode"
                option-attribute="name"
                size="lg"
                placeholder="Select country"
                v-model="addressState.country"
                @change="(e) => (selectedCountry = e)"
                :options="Country.getAllCountries()"
              />
            </UFormGroup>
            <UFormGroup label="Provice" name="provice">
              <USelect
                size="lg"
                placeholder="Select provice"
                v-model="addressState.provice"
                :options="
                  State.getStatesOfCountry(selectedCountry).map((e) => e.name)
                "
              />
            </UFormGroup>

            <UFormGroup label="City" name="city">
              <UInput
                placeholder="Enter city name"
                size="lg"
                v-model="addressState.city"
              />
            </UFormGroup>

            <UFormGroup label="Street" name="street">
              <UInput
                placeholder="Enter street name"
                size="lg"
                v-model="addressState.street"
              />
            </UFormGroup>

            <UFormGroup label="ZIP" name="zip">
              <UInput
                placeholder="Enter zip code"
                size="lg"
                v-model="addressState.zip"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { Country, State, City } from "country-state-city";

import { type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { useLogin } from "~/composables/global-hooks/useAuth";
import { submitBusinessInfo } from "~/composables/global-hooks/useBusiness";
import UploadImage from "~/components/feature/onboarding/upload-image.vue";

const schema = businessInfoSchema;
type Schema = InferType<typeof schema>;

const selectedCountry = ref("IT");

const businessState = reactive({
  business_name: undefined,
  business_type: undefined,
  business_classification: undefined,
  business_size: undefined,
  pms: undefined,
});

const addressState = reactive({
  country: undefined,
  street: undefined,
  city: undefined,
  zip: undefined,
  provice: undefined,
});

const isSubmitted = ref(false);
const taost = useToast();
const router = useRouter();
const selectedAvatar = ref();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitted.value = true;
  const token = useCookie("token").value;
  try {
    const res = await submitBusinessInfo(
      event.data,
      token,
      "POST",
      selectedAvatar.value
    );
    // console.log(res);
    isSubmitted.value = false;
    console.log(res);
  } catch (error) {
    isSubmitted.value = false;
    console.log(error, "is error");
  }
}

definePageMeta({
  title: "Create business",
  metaDescription: "Start a new business",
  layout: "onboarding",
});
</script>
