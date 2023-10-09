<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToName = () => {
  router.push("/name");
};

const goBack = () => {
  router.back();
};

// 创建用于存储日期的 ref
const currentDate = ref("");
const formattedDate = ref("");

// 格式化日期的函数
const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formatted = new Intl.DateTimeFormat("default", options).format(date);
  return formatted;
};

onMounted(() => {
  const today = new Date();

  currentDate.value = today;
  formattedDate.value = formatDate(today);
});
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
        <div class="pl-24 flex flex-col absolute right-5">
          <span class="text-white text-right text-xs tracking-wider"
            >修改當日出缺勤狀態 <br
          /></span>

          <div>
            <p
              class="text-white text-right text-xs tracking-wider"
              id="current_date"
            >
              {{ formattedDate }}
            </p>
          </div>
        </div>
      </div>
    </nav>
    <button class="text-2xl fixed left-3 top-20 text-center" @click="goBack">
      ←
    </button>
    <!-- <button class="absolute bottom-7 left-7" @click="goBack">
      <div
        class="bg-[#e2e2e2] rounded-full py-4 px-5 text-3xl font-semibold border border-black"
      >
        ←
      </div>
    </button> -->
    <div class="p-12"></div>
    <div class="flex justify-center">
      <div class="">
        <label for="section">選擇修改節次：</label>
        <select
          name="section"
          id="section"
          class="py-1 px-6 border border-black rounded-md"
        >
          <option value="first" id="first">第一節</option>
          <option value="second" id="second">第二節</option>
          <option value="third" id="third">第三節</option>
          <option value="fourth" id="fourth">第四節</option>
          <option value="fifth" id="fifth">第五節</option>
          <option value="sixth" id="sixth">第六節</option>
          <option value="seventh" id="seventh">第七節</option>
        </select>
      </div>
    </div>
    <div class="p-3"></div>
    <div class="flex justify-center">
      <button @click="navigateToName">
        <div class="bg-[#363C56] p-2 rounded-md">
          <span class="text-white">確定</span>
        </div>
      </button>
    </div>
  </div>
</template>
