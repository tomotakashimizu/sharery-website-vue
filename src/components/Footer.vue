<template>
  <div>
    <footer class="black-section" id="footer">
      <div class="container-fluid white-letter">
        <router-link to="/terms-of-service" class="white-letter none-underline">
          利用規約
        </router-link>
        <span>｜</span>
        <router-link to="/privacy-policy" class="white-letter none-underline">
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
export default {}
</script>

<style scoped>
.container-fluid {
  padding: 7% 15%;
}

.black-section {
  background-color: #000;
}

.white-letter {
  color: #fff;
}

.none-underline {
  text-decoration: none;
}
</style>
