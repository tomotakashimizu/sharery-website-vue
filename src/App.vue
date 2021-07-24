<template>
  <div id="app">
    <NavBar />
    <!-- ページの内容を表示するのは次の <router-view /> というタグ（＝コンポーネント） -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    NavBar,
    Footer,
  },
  mounted: function () {
    var routeInstance = this.$route
    this.createTitleDesc(routeInstance)
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance)
    },
  },
  methods: {
    //routerで設定した title と metaタグ を反映する
    createTitleDesc(routeInstance) {
      // title を設定
      if (routeInstance.meta.title) {
        var setTitle = routeInstance.meta.title + " | Sharery"
        document.title = setTitle
      } else {
        document.title = "title is not set"
      }

      // metaタグdescription設定
      if (routeInstance.meta.desc) {
        var setDesc = routeInstance.meta.desc + " | Sharery"
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc)
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", "description is not set")
      }
    },
  },
}
</script>

<style>
#app {
  font-family: YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, Verdana, "ＭＳ Ｐゴシック",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(250, 250, 223);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
