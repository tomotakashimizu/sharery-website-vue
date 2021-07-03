<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ScrollTop />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import ScrollTop from "@/components/ScrollTop.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    ScrollTop,
  },
}
</script>
