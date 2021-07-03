<template>
  <div class="nav__bar">
    <!-- router-link の仕事は URL を書きかえることだけ -->
    <router-link to="/" class="nav__logo nav__link">
      <img
        src="../assets/sharery_icon.jpeg"
        alt="Sharery icon"
        class="nav__image"
      />
      <span class="nav__title">Sharery</span>
    </router-link>
    <div class="nav__items">
      <router-link to="/about" class="nav__item nav__link">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav__bar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: black;
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
.nav__item {
  width: 100px;
  /* border-left: 1px solid #eee; */
}

.nav__title {
  color: yellow;
  margin: 10px;
}
.nav__image {
  width: 35px;
  height: 35px;
}
</style>
