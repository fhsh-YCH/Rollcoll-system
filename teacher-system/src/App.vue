<script setup>
// import login from "./page/Login.vue";
// import home from "./page/Home.vue";
// import Nclass from "./page/NoClass.vue";
// import Revise from "./page/Revise.vue";
// import Name from "./page/Name.vue";
// import Modal from "./components/Modal.vue";

// import { ref } from "vue";
// import { req, data_arrive_model_control } from "./utils.js";
// req();

// const isLoading = ref(false);

// const showLoading = () => {
//   isLoading.value = true;
// };

// const hideLoading = () => {
//   isLoading.value = false;
// };
</script>

<template>
  <!-- Login -->
  <!-- <login /> -->

  <!-- 主畫面 Home -->
  <!-- <home /> -->

  <!-- NoClass -->
  <!-- <Nclass /> -->

  <!-- 修改 -->
  <!-- <Revise /> -->

  <!-- 點名 -->
  <!-- <Name /> -->
  <!-- <div class="p-10"></div>
  <Modal /> -->

  <div class="h-screen w-screen overflow-x-hidden">
    <div id="app">
      <div>
        <nav>
          <router-link to="/"></router-link>
          <router-link to="/home"></router-link>
          <router-link to="/name"></router-link>
          <!-- <router-link to="/revise"></router-link> -->
          <router-link to="/logina"></router-link>
          <router-link to="/tutorclass"></router-link>
          <router-link to="/classdaytable"></router-link>
          <router-link to="/latewrite"></router-link>
          <router-link to="/executivereport"></router-link>
          <router-link to="/executiveresult"></router-link>
          <router-link to="/noclass"></router-link>
          <router-link to="/401"></router-link>
          <router-link to="/403"></router-link>
          <router-link to="/404"></router-link>
          <router-link to="/500"></router-link>
          <router-link to="/lateproof"></router-link>
          <router-link to="/lpsearch"></router-link>
          <router-link to="/superuserhome"></router-link>
          <router-link to="/superuserverify"></router-link>
          <router-link to="/superuserselect"></router-link>
          <router-link to="/commenreasonset"></router-link>
        </nav>
        <router-view />
      </div>

      <!-- <div
        v-if="data_arrive_model_control.is_open"
        class="h-mobile-screen fixed inset-0 flex w-screen items-center justify-center bg-black/60"
      >
        <div class="spinner fixed z-50">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 80%;
  height: 80%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
