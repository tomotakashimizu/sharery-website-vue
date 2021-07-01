<template>
  <div>
    <transition>
      <div v-show="visible">
        <a
          class="arrow-base arrow-circle-frame"
          v-on:click="scrollTopSmooth"
        ></a>
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
a:hover {
  cursor: pointer;
}

/* 矢印アイコン（正円枠） */
.arrow-base {
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: inline-block;
  padding: 0 0 0 16px;
  vertical-align: middle;
  text-decoration: none;
  font-size: 15px;
}
.arrow-base::before,
.arrow-base::after {
  position: fixed;
  right: 25px;
  bottom: 25px;
  content: "";
  vertical-align: middle;
}
.arrow-circle-frame::before {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 3px solid #222;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: yellow;
}
.arrow-circle-frame::after {
  position: fixed;
  right: 40px;
  bottom: 35px;
  width: 20px;
  height: 20px;
  border-top: 3px solid #222;
  border-right: 3px solid #222;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
/* 矢印アイコン（正円枠） */

/* hover: 矢印アイコン（正円枠） */
.arrow-circle-frame:hover::before {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 3px solid #222;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background-color: #222;
}
.arrow-circle-frame:hover::after {
  position: fixed;
  right: 40px;
  bottom: 35px;
  width: 20px;
  height: 20px;
  border-top: 3px solid yellow;
  border-right: 3px solid yellow;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
/* hover: 矢印アイコン（正円枠） */

/* 矢印アイコン（正円枠）ボタン フェード処理ここから */
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
/* 矢印アイコン（正円枠）ボタン フェード処理ここまで */
</style>
