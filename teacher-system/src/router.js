import { createRouter, createWebHistory } from "vue-router";
import login from "./page/Login.vue";
import Home from "./page/Home.vue";
import Name from "./page/Name.vue";
import Revise from "./page/Revise.vue";
import LoginA from "./page/LoginAcc.vue";
import Tutor from "./page/TutorClass.vue";
import ClassDay from "./page/ClassDay.vue";
import LateWrite from "./page/Late-write.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: login },
    { path: "/home", component: Home },
    { path: "/name", component: Name },
    { path: "/revise", component: Revise },
    { path: "/logina", component: LoginA },
    { path: "/tutorclass", component: Tutor },
    { path: "/classdaytable", component: ClassDay },
    { path: "/latewrite", component: LateWrite },
  ],
});

export default router;
