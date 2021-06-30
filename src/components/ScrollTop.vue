<template>
  <div>
    <transition>
      <div v-show="visible">
        <div class="page-button" v-on:click="scrollTopSmooth">
          <i class="fas fa-chevron-up page-button-icon"></i>
        </div>
      </div>
    </transition>
    <a href="#" class="arrow circle-frame"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
    this.scrollTopInstant()
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      if (!this.visible) {
        this.visible = window.scrollY > 100
      } else if (window.scrollY < 90) {
        this.visible = !this.visible
      }
    },
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
.arrow {
  position: relative;
  display: inline-block;
  padding: 0 0 0 16px;
  color: #000;
  vertical-align: middle;
  text-decoration: none;
  font-size: 15px;
}
.arrow::before,
.arrow::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  content: "";
  vertical-align: middle;
}
.circle-frame::before {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 3px solid #7a0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: #fff;
}
.circle-frame::after {
  top: 10px;
  left: 15px;
  width: 20px;
  height: 20px;
  border-top: 3px solid #7a0;
  border-right: 3px solid #7a0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/* ヘッダーロゴ フェード処理ここから */
.v-enter {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
  transition: opacity 1s;
}
/* ヘッダーロゴ フェード処理ここまで */

.page-button {
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
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
