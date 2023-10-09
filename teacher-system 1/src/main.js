// import { createApp } from "vue";
import "./style.css";
// import App from "./APP.vue";
// import router from "./router";
// const app = createApp(App);

// app.use(router);

// app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPrG62ni_x41gyDs8UZpE5-LgIsTu0TTI",
  authDomain: "teacher-system-1b511.firebaseapp.com",
  projectId: "teacher-system-1b511",
  storageBucket: "teacher-system-1b511.appspot.com",
  messagingSenderId: "779187208880",
  appId: "1:779187208880:web:b96200912d45846a2a3175",
  measurementId: "G-T0GD6YKMNE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const vueApp = createApp(App);

vueApp.use(router);

vueApp.config.globalProperties.$app = app;

vueApp.mount("#app");

export { app };
