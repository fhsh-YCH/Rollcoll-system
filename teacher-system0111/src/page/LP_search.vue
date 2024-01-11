<!-- page 晚到證明填寫 -->
<!-- "../components/Modal.vue" 常用事由設定component -->

<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide lg:text-lg"
          >復興高中<br />智慧出缺勤系統</span
        >
      </div>
    </nav>
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>

    <div class="p-12 md:p-20 lg:p-32"></div>

    <div class="flex flex-col items-center bg-[#FEFAF7]">
      <!-- <span
        class="text-2xl font-bold pb-8 md:pb-10 lg:pb-32 md:text-4xl lg:text-4xl"
        >學號填寫</span
      > -->
      <div class=""></div>
      <form class="flex">
        <input
          v-model="search"
          type="search"
          placeholder="請輸入學號..."
          class="p-3 rounded-md lg:w-64 lg:h-12 border border-[#363C56]"
          required
        />
        <div class="p-3"></div>
        <button
          @click="search"
          class="lg:w-20 lg:h-12 bg-[#363C56] text-white font-bold leading-6 text-lg rounded-md"
        >
          查 詢
        </button>
      </form>
      <div class="p-4"></div>
      <button @click="navigateToLateWrite">
        <div
          class="flex justify-center items-center button bg-white lg:w-96 lg:h-32 border border-[#EAEAEA] rounded-lg"
        >
          <span class="text-center font-semibold text-4xl p-3 text-[#3D3D3D]"
            >31116 楊沁璇</span
          >
        </div>
      </button>

      <div class="p-6"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const navigateToLateWrite = () => {
  router.push("/latewrite");
};

const router = useRouter();
const goBack = () => {
  router.back();
};

import Modal from "../components/Modal.vue";

const isModalOpen = ref(false);
</script>

<style scoped>
.button {
  align-items: center;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  border-color: #363c56;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button:hover {
  box-shadow: #363c56 0 0 0 3px, transparent 0 0 0 0;
}
</style>

<!--  -->
