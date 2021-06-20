<template>
  <div id="app">
    <NavBar />
    <!-- ページの内容を表示するのは次の <router-view /> というタグ（＝コンポーネント） -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
