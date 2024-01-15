<!-- page 班導查看班級出缺席 -->
<!-- "../components/StudentState.vue" 導班班級學生component -->
<!-- "../mark/StudentStatus.json" 導班班級學生component的假資料 -->

<script setup>
import { useRouter } from "vue-router";
import StudentState from "../components/StudentState.vue";
// import { ref, onMounted } from "vue";
// const fakeData = ref([]);
const router = useRouter();

const goBack = () => {
  router.back();
};
const home = () => {
  router.push("/home");
};
</script>
<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <div class="flex items-center">
        <button @click="home" class="text-left">
          <span class="text-white text-sm font-semibold tracking-wide"
            >復興高中<br />智慧出缺勤系統</span
          >
        </button>
      </div>
    </nav>
    <div class="p-10 md:p-12"></div>
    <button
      class="text-2xl fixed left-4 top-20 text-center lg:top-28 lg:text-4xl lg:left-8 md:text-3xl md:left-6"
      @click="goBack"
    >
      ←
    </button>
    <div class="md:flex md:justify-center md:items-center bg-[#FEFAF7]">
      <div
        class="flex flex-col justify-center items-center gap-2 lg:grid-cols-3 lg:w-10/11 md:grid-cols-2 md:grid md:gap-3 md:pl-6 lg:ml-6"
      >
        <StudentState />
      </div>
    </div>

    <div class="p-2 bg-[#FEFAF7] md:p-6"></div>
  </div>
</template>
