<template>
  <div class="home">
    <Preview />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ScrollTop />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import ScrollTop from "@/components/ScrollTop.vue"
import Preview from "@/components/Preview.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    ScrollTop,
    Preview,
  },
}
</script>
