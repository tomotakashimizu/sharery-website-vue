<template>
  <div class="home">
    <Preview imageUrl="./previews/iPhone12ProMax_01.jpeg" />
    <div>
      <!-- アイコン -->
      <img src="../assets/sharery_icon.png" alt="sharery icon" class="icon" />
    </div>
    <!-- ダウンロードボタン -->
    <DownloadButton buttonSize="large" />

    <Concept />

    <!-- スクショ一覧 -->
    <Preview imageUrl="./previews/iPhone12ProMax_02.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_03.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_04.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_05.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_06.jpeg" />
    <Preview imageUrl="./previews/iPhone12ProMax_07.jpeg" />

    <!-- 一番上にスクロールするボタン -->
    <ScrollTop />
  </div>
</template>

<script>
// @ is an alias to /src
import ScrollTop from "@/components/ScrollTop.vue"
import Preview from "@/components/Preview.vue"
import DownloadButton from "@/components/DownloadButton.vue"
import Concept from "@/components/Concept.vue"

export default {
  name: "Home",
  components: {
    ScrollTop,
    Preview,
    DownloadButton,
    Concept,
  },
}
</script>

<style scoped>
.icon {
  height: 150px;
  width: 150px;
  margin: 30px 0px;
}
</style>
