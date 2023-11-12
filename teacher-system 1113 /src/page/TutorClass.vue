<script setup>
import { useRouter } from "vue-router";
import StudentState from "../components/StudentState.vue";
// import { ref, onMounted } from "vue";
// const fakeData = ref([]);
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide"
          >復興高中<br />智慧出缺勤系統</span
        >
      </div>
    </nav>
    <div class="p-10"></div>
    <button class="text-2xl fixed left-3 top-24 text-center" @click="goBack">
      ←
    </button>
    <div class="flex flex-col justify-center items-center gap-2 bg-[#FEFAF7]">
      <StudentState />
    </div>
    <div class="p-2 bg-[#FEFAF7]"></div>
  </div>
</template>
