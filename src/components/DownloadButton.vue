<template>
  <div>
    <a
      href="https://apps.apple.com/jp/app/sharery-%E3%82%B7%E3%82%A7%E3%82%A2%E3%83%AA%E3%83%BC/id1520408589?itsct=apps_box_badge&amp;itscg=30200"
      style="display: inline-block; overflow: hidden; max-width: 100%"
      v-bind:class="buttonSize"
      ><img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1593388800&h=631de95f1815167a325c9b7c4d23f7ef"
        alt="Download on the App Store"
        style="max-width: 100%"
        v-bind:class="buttonSize"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    buttonSize: {
      validator(value) {
        return ["large", "small", "medium"].includes(value)
      },
    },
  },
}
</script>

<style scoped>
/* ボタンのサイズ */
.large {
  border-radius: 13px;
  width: 250px;
  height: 83px;
}
.small {
  height: 40px;
}
.medium {
  height: 60px;
}
/* ボタンのサイズ */
</style>
