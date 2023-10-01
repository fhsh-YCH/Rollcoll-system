<script setup>
import Table from "../components/ClassDayTable.vue";
import ClassTag from "../components/ClassTag.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.back();
};
// const attendanceData = ref([]); // 创建 ref 来存储后端获取的数据

// // 模拟从后端获取数据的函数
// const fetchDataFromBackend = () => {
//   // 这里可以使用你的后端 API 请求逻辑
//   // 假设你从后端获取了一个数组，每个元素包含出勤状态
//   const responseFromBackend = [
//     { status: "準時" },
//     { status: "遲到" },
//     { status: "缺席" },
//     // ...
//   ];

//   // 将数据存储在 attendanceData ref 中
//   attendanceData.value = responseFromBackend;
// };

// // 使用 onMounted 钩子来在组件挂载后发起请求
// onMounted(() => {
//   fetchDataFromBackend();
// });
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
        <div class="pl-24 flex absolute right-5">
          <span class="text-white text-right text-xs tracking-wider"
            >班級日報表</span
          >
        </div>
      </div>
    </nav>
    <button class="text-2xl fixed left-4 top-20 text-center" @click="goBack">
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
