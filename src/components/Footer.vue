<template>
  <div>
    <footer class="black-section" id="footer">
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

<style scoped>
.container-fluid {
  padding: 7% 15%;
}

.black-section {
  background-color: #000;
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
</style>
