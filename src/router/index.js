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
    meta: { title: "ページタイトル", desc: "ディスクリプションを記述" },
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
