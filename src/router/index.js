import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import TermsOfService from "../views/TermsOfService.vue"
import PrivacyPolicy from "../views/PrivacyPolicy.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Sharery (シェアリー) 公式サイト",
      desc: "Sharery (シェアリー) の公式サイトです。Shareryは友達や恋人、家族と日記をシェアできます。現在iPhone、iPadでご利用になれます。",
    },
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: TermsOfService,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
