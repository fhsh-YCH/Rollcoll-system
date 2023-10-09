<script setup>
// import login from "./page/Login.vue";
// import home from "./page/Home.vue";
// import Nclass from "./page/NoClass.vue";
// import Revise from "./page/Revise.vue";
// import Name from "./page/Name.vue";
// import Modal from "./components/Modal.vue";
import { ref } from "vue";

const isLoading = ref(false);

const showLoading = () => {
  isLoading.value = true;
};

const hideLoading = () => {
  isLoading.value = false;
};
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
          <router-link to="/revise"></router-link>
          <router-link to="/logina"></router-link>
          <router-link to="/tutorclass"></router-link>
          <router-link to="/classdaytable"></router-link>
        </nav>
        <router-view />
      </div>

      <div v-if="isLoading" class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
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
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
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
