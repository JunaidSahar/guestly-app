<template>
  <div class="flex items-start justify-between gap-20">
    <div class="w-1/3 space-y-1">
      <h1 class="text-lg font-semibold text-gray-950">Upload Business Image</h1>
      <p class="text-gray-500 text-sm">
        The maximum file size you can upload is 5MB.
      </p>
    </div>
    <div class="flex-1">
      <div class="p-4 rounded-lg border border-dashed relative">
        <div class="flex items-center gap-2">
          <div
            v-if="!previewImage"
            class="w-12 h-12 bg-gray-50 rounded flex items-center justify-center"
          >
            <Icon
              name="material-symbols:image-outline-rounded"
              size="28"
              class="text-gray-700"
            />
          </div>
          <img
            v-else
            :src="previewImage"
            alt="Uploaded Preview"
            class="rounded h-12 w-12 object-cover"
          />
          <p class="text-gray-950">Maximum file size is 5MB</p>
          <input
            type="file"
            class="opacity-0 absolute w-full h-full cursor-pointer"
            accept="image/*"
            @change="uploadImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const previewImage = ref();
const imageFile = ref();
const props = defineProps({
  getImage: {
    type: Function,
    default: (file) => ({}),
  },
});

const uploadImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 1 * 1080 * 1080) {
      alert("File size is too large. Please choose a file less than 5MB.");
      event.target.value = "";
      return;
    }

    previewImage.value = URL.createObjectURL(file);
    imageFile.value = file;
    props.getImage(imageFile.value);
  }
};
</script>
