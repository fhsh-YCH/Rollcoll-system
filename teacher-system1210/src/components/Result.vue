<template>
  <div
    v-for="(result, index) in results"
    :key="result.id"
    class="py-4 px-2 border border-[#000000] rounded-md flex justify-center flex-col w-72 md:w-80 ml-7 bg-white"
  >
    <div class="flex flex-col">
      <span class="font-bold text-xl pl-2">日期：{{ result.date }}</span>
      <span class="pl-3 text-sm font-semibold py-1">出席狀態：</span>
      <div class="pl-3 pt-2 flex gap-1 md:gap-2">
        <div
          id="curriculum_1"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_1 === 1,
            'bg-[#DF756E] text-white': result.curriculum_1 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_1 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_1 !== 0 &&
              result.curriculum_1 !== 1 &&
              result.curriculum_1 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">1</span>
        </div>
        <div
          id="curriculum_2"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_2 === 1,
            'bg-[#DF756E] text-white': result.curriculum_2 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_2 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_2 !== 0 &&
              result.curriculum_2 !== 1 &&
              result.curriculum_2 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">2</span>
        </div>
        <div
          id="curriculum_3"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_3 === 1,
            'bg-[#DF756E] text-white': result.curriculum_3 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_3 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_3 !== 0 &&
              result.curriculum_3 !== 1 &&
              result.curriculum_3 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">3</span>
        </div>
        <div
          id="curriculum_4"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_4 === 1,
            'bg-[#DF756E] text-white': result.curriculum_4 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_4 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_4 !== 0 &&
              result.curriculum_4 !== 1 &&
              result.curriculum_4 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">4</span>
        </div>
        <div
          id="curriculum_5"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_5 === 1,
            'bg-[#DF756E] text-white': result.curriculum_5 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_5 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_5 !== 0 &&
              result.curriculum_5 !== 1 &&
              result.curriculum_5 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">5</span>
        </div>
        <div
          id="curriculum_6"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_6 === 1,
            'bg-[#DF756E] text-white': result.curriculum_6 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_6 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_6 !== 0 &&
              result.curriculum_6 !== 1 &&
              result.curriculum_6 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">6</span>
        </div>
        <div
          id="curriculum_7"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_7 === 1,
            'bg-[#DF756E] text-white': result.curriculum_7 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_7 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_7 !== 0 &&
              result.curriculum_7 !== 1 &&
              result.curriculum_7 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">7</span>
        </div>
        <div
          id="curriculum_8"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_8 === 1,
            'bg-[#DF756E] text-white': result.curriculum_8 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_8 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_8 !== 0 &&
              result.curriculum_8 !== 1 &&
              result.curriculum_8 !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">8</span>
        </div>
        <div
          id="curriculum_9"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': result.curriculum_9 === 1,
            'bg-[#DF756E] text-white': result.curriculum_9 === 2,
            'bg-[#7EA99F] text-white': result.curriculum_9 === 0,
            'bg-[#e2e2e2] text-black':
              result.curriculum_9 !== 0 &&
              result.curriculum_9 !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">9</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import Json from "../mark/Result.json";

const results = Json.results;
</script>

<!-- v-for="(student, index) in fakeData.students"
    :key="student.id" -->
