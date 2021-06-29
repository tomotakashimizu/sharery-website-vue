<template>
  <div>
    <div class="page-button" v-on:click="scrollTopSmooth">
      <i class="fas fa-chevron-up page-button-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.scrollTopInstant()
  },
  methods: {
    scrollTopSmooth() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
    scrollTopInstant() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      })
    },
  },
}
</script>

<style scoped>
.page-button {
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  background: #5bc8ac;
}
.page-button-icon {
  color: #fff;
  font-size: 16px;
}
</style>
