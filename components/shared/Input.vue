<template>
  <div class="flex flex-col gap-1">
    <label class="text-gray-800 font-medium" for="email"
      >{{ label }} {{ required ? "*" : "" }}</label
    >
    {{ localValue }}
    <input
      class="py-2 px-4 border border-gray-200 rounded-md placeholder:text-sm"
      :type="type"
      :class="isValid ? 'focus:outline-primaryColor' : 'focus:outline-red-500'"
      :id="id"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
