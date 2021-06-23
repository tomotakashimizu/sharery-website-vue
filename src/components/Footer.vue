<template>
  <div>
    <footer class="black-section" id="footer">
      <div class="container-fluid">
        <router-link to="/terms-of-service">利用規約</router-link>
        <span>｜</span>
        <router-link to="/privacy-policy">プライバシーポリシー</router-link>
        <p class="white-letter">© 2020 Sharery</p>
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
</style>
