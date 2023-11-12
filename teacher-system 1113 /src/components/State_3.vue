<template>
  <div
    v-for="(student, index) in fakeData.students"
    :key="student.id"
    class="py-4 px-2 border border-[#000000] rounded-md flex justify-center flex-col w-80 ml-7 bg-white"
  >
    <div class="flex flex-col">
      <span class="font-bold text-xl pl-2"
        >{{ student.class }}{{ student.seatnumber }} {{ student.name }}</span
      >
      <span class="pl-3 text-sm font-semibold py-1">出席狀態：</span>
      <div class="pl-3 pt-2 flex gap-2">
        <div
          id="curriculum_1"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">1</span>
        </div>
        <div
          id="curriculum_2"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">2</span>
        </div>
        <div
          id="curriculum_3"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">3</span>
        </div>
        <div
          id="curriculum_4"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">4</span>
        </div>
        <div
          id="curriculum_5"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">5</span>
        </div>
        <div
          id="curriculum_6"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">6</span>
        </div>
        <div
          id="curriculum_7"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">7</span>
        </div>
        <div
          id="curriculum_8"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
              student.attend_status !== 2,
          }"
          class="w-1 h-1 p-3 flex justify-center items-center"
        >
          <span class="text-sm">8</span>
        </div>
        <div
          id="curriculum_9"
          :class="{
            'rounded-full': true,
            'bg-[#F9DC67] text-white': student.attend_status === 1,
            'bg-[#DF756E] text-white': student.attend_status === 2,
            'bg-[#7EA99F] text-white': student.attend_status === 0,
            'bg-[#e2e2e2] text-black':
              student.attend_status !== 0 &&
              student.attend_status !== 1 &&
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
import Json from "../mark/StudentStatus_1.json";

const fakeData = ref({
  students: [],
});

onMounted(() => {
  fakeData.value = Json;
});
</script>

<!-- v-for="(student, index) in fakeData.students"
    :key="student.id" -->
