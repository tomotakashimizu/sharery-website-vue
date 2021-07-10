<template>
  <div>
    <img alt="Preview" v-bind:src="imageUrl" class="preview-image" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.preview-image {
  /* width: 1000px; */
  max-width: 100%;
  height: auto;
  background-size: cover;
}
</style>
