<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-primary">test</button>
    <ScrollTop />
  </div>
</template>

<script>
import ScrollTop from "@/components/ScrollTop.vue"

export default {
  name: "About",
  components: {
    ScrollTop,
  },
}
</script>
