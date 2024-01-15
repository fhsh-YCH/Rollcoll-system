<!-- 暫不使用 -->
<script setup>
import Table from "../components/ClassDayTable.vue";
import ClassTag from "../components/ClassTag.vue";
import { useRouter } from "vue-router";

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

        <div class="pl-24 flex absolute right-5">
          <span class="text-white text-right text-xs tracking-wider"
            >班級日報表</span
          >
        </div>
      </div>
    </nav>
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>
    <div class="fixed left-2 top-32 text-center">
      <div><ClassTag /></div>
    </div>

    <div class="p-10"></div>
    <div class="flex flex-col justify-center items-center gap-3">
      <!-- <Table :attendanceData="attendanceData" />
      <Table :attendanceData="attendanceData" /> -->
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
    </div>
  </div>
</template>
