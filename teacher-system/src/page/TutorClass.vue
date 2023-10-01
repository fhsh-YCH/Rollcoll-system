<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
const navigateToClassDay = () => {
  router.push("/classdaytable");
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
    <div class="p-12"></div>
    <button class="text-2xl fixed left-3 top-24 text-center" @click="goBack">
      ←
    </button>
    <!-- 班級報表 -->
    <div class="flex justify-center items-center ml-6">
      <div
        class="bg-[#4B526D] px-12 py-6 rounded-lg flex flex-col justify-center items-center gap-6"
      >
        <div class="flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M23.375 28.875V26.125C23.375 24.6663 22.7955 23.2674 21.7641 22.2359C20.7326 21.2045 19.3337 20.625 17.875 20.625H6.875C5.41631 20.625 4.01736 21.2045 2.98591 22.2359C1.95446 23.2674 1.375 24.6663 1.375 26.125V28.875"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.375 15.125C15.4126 15.125 17.875 12.6626 17.875 9.625C17.875 6.58743 15.4126 4.125 12.375 4.125C9.33743 4.125 6.875 6.58743 6.875 9.625C6.875 12.6626 9.33743 15.125 12.375 15.125Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.625 28.875V26.125C31.6241 24.9064 31.2185 23.7226 30.4719 22.7594C29.7253 21.7963 28.6799 21.1084 27.5 20.8037"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4.30374C23.1831 4.60666 24.2317 5.29471 24.9805 6.25942C25.7293 7.22413 26.1358 8.41063 26.1358 9.63187C26.1358 10.8531 25.7293 12.0396 24.9805 13.0043C24.2317 13.969 23.1831 14.6571 22 14.96"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-3xl text-white">班級報表</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-3">
          <button
            class="bg-white w-48 py-3 rounded-md"
            @click="navigateToClassDay"
          >
            <span class="text-2xl font-semibold">日報表</span>
          </button>
          <button class="bg-white w-48 py-3 rounded-md">
            <span class="text-2xl font-semibold">月報表</span>
          </button>
          <button class="bg-white w-48 py-3 rounded-md">
            <span class="text-2xl font-semibold">學期報表</span>
          </button>
        </div>
      </div>
    </div>
    <div class="p-3"></div>
    <!-- 個人報表 -->
    <div class="flex justify-center items-center ml-6">
      <div
        class="bg-[#4B526D] px-12 py-6 rounded-lg flex flex-col justify-center items-center gap-6"
      >
        <div class="flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M27.5 28.875V26.125C27.5 24.6663 26.9205 23.2674 25.8891 22.2359C24.8576 21.2045 23.4587 20.625 22 20.625H11C9.54131 20.625 8.14236 21.2045 7.11091 22.2359C6.07946 23.2674 5.5 24.6663 5.5 26.125V28.875"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 15.125C19.5376 15.125 22 12.6626 22 9.625C22 6.58743 19.5376 4.125 16.5 4.125C13.4624 4.125 11 6.58743 11 9.625C11 12.6626 13.4624 15.125 16.5 15.125Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-3xl text-white">個人報表</span>
        </div>
        <div class="flex flex-col justify-center items-center gap-3">
          <button class="bg-white w-48 py-3 rounded-md">
            <span class="text-2xl font-semibold">日報表</span>
          </button>
          <button class="bg-white w-48 py-3 rounded-md">
            <span class="text-2xl font-semibold">月報表</span>
          </button>
          <button class="bg-white w-48 py-3 rounded-md">
            <span class="text-2xl font-semibold">學期報表</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
