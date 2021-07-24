<template>
  <div class="preview-section">
    <img
      alt="Preview"
      v-bind:src="imageUrl"
      class="preview-image round-shadow"
    />
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
.preview-section {
  margin: 50px 10px;
}
.preview-image {
  /* width: 1000px; */
  max-width: 100%;
  height: auto;
  background-size: cover;
}
.round-shadow {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3); /* 影指定 */
  border-radius: 7px; /* 角丸指定 */
}
</style>
