<template>
  <div class="home">
    <Preview imageUrl="./previews/iPhone12ProMax_01.jpeg" />
    <div class="white-section">
      <img src="../assets/sharery_icon.png" alt="sharery icon" class="icon" />
    </div>
    <DownloadButton />
    <Preview imageUrl="./previews/iPhone12ProMax_02.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_03.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_04.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_05.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_06.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_07.jpeg" />
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
import DownloadButton from "@/components/DownloadButton.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    ScrollTop,
    Preview,
    DownloadButton,
  },
}
</script>

<style scoped>
.icon {
  height: 100px;
  width: 100px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.white-section {
  background-color: white;
}
</style>
