<template>
  <div class="nav__bar">
    <!-- router-link の仕事は URL を書きかえることだけ -->
    <router-link to="/" class="nav__logo nav__link">
      <img
        src="../assets/sharery_icon.png"
        alt="Sharery icon"
        class="nav__image"
      />
      <span class="nav__title">Sharery</span>
    </router-link>
    <div class="nav__items">
      <DownloadButton buttonSize="small" class="download-image" />
    </div>
  </div>
</template>

<script>
import DownloadButton from "./DownloadButton.vue"

export default {
  name: "NavBar",
  components: {
    DownloadButton,
  },
}
</script>

<style scoped>
.nav__bar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #111;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}
.nav__link:visited {
  color: #eee;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.nav__logo {
  width: 210px;
  font-size: 25px;
}
.nav__items {
  display: flex;
}

.nav__title {
  color: yellow;
  margin: 10px;
}
.nav__image {
  width: 35px;
  height: 35px;
}

.download-image {
  margin: 30px 20px;
}
</style>
