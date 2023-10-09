<!-- <template>
  <div
    class="border border-[#000000] rounded-lg flex flex-col w-72 py-5 ml-6 bg-white"
  >
    <span class="font-bold text-xl pl-5">班級座號姓名</span>

    <div class="p-1"></div>
    <span class="font-semibold text-md pl-6">出席狀態：</span>
    <div class="p-1"></div>
    <div class="flex pl-6 gap-2">
      <div
        v-for="period in 7"
        :key="period"
        class="bg-[#e2e2e2] font-bold text-xs rounded-full w-7 text-center h-7 justify-center items-center flex"
      >
        {{ period }}
      </div>
    </div>
  </div>
</template> -->

<template>
  <div
    class="border border-[#000000] rounded-lg flex flex-col w-64 pr-1 py-3 ml-9 bg-white"
  >
    <span class="font-bold text-lg pl-4">班級座號姓名</span>

    <span class="font-semibold text-sm pl-5 text-[#323232]">出席狀態：</span>
    <div class="p-1"></div>
    <div class="flex pl-5 gap-2">
      <div
        v-for="period in periods"
        :key="period"
        :class="{
          'bg-[#7EA99F] text-white': attendanceStatus[period] === '準時',
          'bg-[#F9DC67] text-white': attendanceStatus[period] === '遲到',
          'bg-[#DF756E] text-white': attendanceStatus[period] === '缺席',
        }"
        class="font-bold text-xs rounded-full w-6 text-center h-6 justify-center items-center flex"
      >
        {{ period }}
      </div>
    </div>
  </div>
</template>

<script setup>
const attendanceStatus = {
  1: "準時",
  2: "遲到",
  3: "遲到",
  4: "準時",
  5: "缺席",
  6: "準時",
  7: "遲到",
};

const periods = [1, 2, 3, 4, 5, 6, 7];
</script>
