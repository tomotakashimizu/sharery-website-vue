<template>
  <div>
    <transition>
      <div v-show="visible">
        <div class="page-button" v-on:click="scrollTopSmooth">
          <i class="fas fa-chevron-up page-button-icon"></i>
        </div>
        <h1 id="header-logo">ここがフェードイン・アウトするよ</h1>
      </div>
    </transition>
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
#header-logo {
  position: fixed;
  top: 5%;
  left: 9%;
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
