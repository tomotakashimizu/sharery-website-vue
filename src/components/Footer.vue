<template>
  <div>
    <footer class="black-section" id="footer">
      <!-- アイコン -->
      <div>
        <img src="../assets/sharery_icon.png" alt="sharery icon" class="icon" />
      </div>

      <!-- ダウンロードボタン -->
      <DownloadButton buttonSize="medium" />

      <div class="container-fluid white-letter">
        <router-link to="/terms-of-service" class="footer__link-letter">
          利用規約
        </router-link>
        <span>｜</span>
        <router-link to="/privacy-policy" class="footer__link-letter">
          プライバシーポリシー
        </router-link>
        <br />
        <br />
        <p>© 2020 Sharery</p>
      </div>
    </footer>
  </div>
</template>

<script>
import DownloadButton from "./DownloadButton.vue"

export default {
  name: "Footer",
  components: {
    DownloadButton,
  },
}
</script>

<style scoped>
.container-fluid {
  padding: 7% 15%;
}

.black-section {
  background-color: #111;
}

.footer__link-letter {
  color: #fff;
  text-decoration: none;
}
.footer__link-letter:hover {
  color: yellow;
}

.white-letter {
  color: #fff;
}

.icon {
  height: 100px;
  width: 100px;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
