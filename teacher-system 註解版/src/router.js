import { createRouter, createWebHistory } from "vue-router";
// import Vue from "vue";
// import VueRouter from "vue-router";
import login from "./page/Login.vue";
import Home from "./page/Home.vue";
import Name from "./page/Name.vue";
// import Revise from "./page/Revise.vue";
import LoginA from "./page/LoginAcc.vue";
import Tutor from "./page/TutorClass.vue";
import ClassDay from "./page/ClassDay.vue";
import LateWrite from "./page/Late-write.vue";
import ExecutiveReport from "./page/ExecutiveReport.vue";
import ExecutiveResult from "./page/ExecutiveResult.vue";
import NoClass from "./page/TodayNoClass.vue";
import Modal401 from "./components/Module_401.vue";
import Modal403 from "./components/Module_403.vue";
import Modal404 from "./components/Module_404.vue";
import Modal500 from "./components/Module_500.vue";
import LateProof from "./page/LateProof.vue";

// Vue.use(VueRouter);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: login },
    { path: "/home", component: Home },
    { path: "/name", component: Name },
    // { path: "/revise", component: Revise },
    { path: "/logina", component: LoginA },
    { path: "/tutorclass", component: Tutor },
    { path: "/classdaytable", component: ClassDay },
    { path: "/latewrite", component: LateWrite },
    { path: "/executivereport", component: ExecutiveReport },
    { path: "/executiveresult", component: ExecutiveResult },
    { path: "/noclass", component: NoClass },
    {
      path: "/401",
      component: Modal401,
      name: "401",
      meta: { requiresAuth: true },
    },
    {
      path: "/403",
      component: Modal403,
      name: "403",
      meta: { requiresAuth: true },
    },
    {
      path: "/404",
      component: Modal404,
      name: "404",
      meta: { requiresAuth: true },
    },
    {
      path: "/500",
      component: Modal500,
      name: "500",
      meta: { requiresAuth: true },
    },
    { path: "/lateproof", component: LateProof },
  ],
});

// // HTTP error
// router.beforeEach((to, from, next) => {
//   // Assuming you are using Axios for HTTP requests
//   axios
//     .get("your_api_endpoint")
//     .then((response) => {
//       // Continue to the next route if the request is successful
//       next();
//     })
//     .catch((error) => {
//       if (error.response) {
//         const statusCode = error.response.status;
//         switch (statusCode) {
//           case 401:
//             // Redirect to the 401 page if there is a 401 error
//             next("/401");
//             break;
//           case 403:
//             // Redirect to the 403 page if there is a 403 error
//             next("/403");
//             break;
//           case 404:
//             // Redirect to the 404 page if there is a 404 error
//             next("/404");
//             break;
//           case 500:
//             // Redirect to the 500 page if there is a 500 error
//             next("/500");
//             break;
//           default:
//             // Handle other errors or continue to the next route
//             next();
//         }
//       } else {
//         // Handle other errors or continue to the next route
//         next();
//       }
//     });
// });

export default router;
