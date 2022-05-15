
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("../views/Accueil.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/vosFichiers",
    name: "Vos Fichiers",
    component: () => import("../views/VosFichiers.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
