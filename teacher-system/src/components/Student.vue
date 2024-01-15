<!-- Name.vue 的component -->
<template>
  <div
    v-for="(currentStudent, index) in students"
    :key="currentStudent._id"
    class="border border-[#000000] rounded-md flex justify-center items-center flex-col lg:w-80 lg:py-5 w-72 py-3 ml-6 md:ml-0 md:py-4 md:w-72 lg:ml-6 bg-white"
  >
    <div class="flex items-start gap-4">
      <div>
        <span class="font-semibold text-lg lg:text-2xl">
          {{ currentStudent.grade }}{{ currentStudent.class_num }}
          {{ currentStudent.seat_num }}
          {{ currentStudent.name }}
        </span>
      </div>

      <button
        @click="NotOpenYet"
        class="rounded-full px-2 lg:px-2 lg:py-1 text-sm lg:text-md text-center font-semibold text-white bg-[#A3A3A3]"
      >
        晚到單
      </button>
    </div>
    <div class="p-1 lg:p-2"></div>
    <div class="flex gap-3 lg:gap-4">
      <div
        @click="selectStatus('準時', currentStudent._id)"
        :class="{
          'bg-[#7EA99F] text-white': currentStudent.status === '準時',
          'bg-white text-black': currentStudent.status !== '準時',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 lg:py-4 lg:px-4 lg:text-2xl text-lg font-semibold cursor-pointer"
      >
        準時
      </div>
      <div
        @click="selectStatus('遲到', currentStudent._id)"
        :class="{
          'bg-[#F9DC67] text-white': currentStudent.status === '遲到',
          'bg-white text-black': currentStudent.status !== '遲到',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 lg:py-4 lg:px-4 lg:text-2xl text-lg font-semibold cursor-pointer"
      >
        遲到
      </div>
      <div
        @click="selectStatus('缺席', currentStudent._id)"
        :class="{
          'bg-[#DF756E] text-white': currentStudent.status === '缺席',
          'bg-white text-black': currentStudent.status !== '缺席',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 lg:py-4 lg:px-4 lg:text-2xl text-lg font-semibold cursor-pointer"
      >
        缺席
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);

onMounted(() => {
  const userInfo = JSON.parse(localStorage.getItem("User Info."));
  if (userInfo && userInfo.curriculums && userInfo.curriculums.length > 0) {
    students.value = userInfo.curriculums[0].students;
    students.value.forEach((student) => (student.status = "準時"));
  } else {
    console.error("Invalid user info or empty curriculums array.");
  }
});

const selectStatus = (status, studentId) => {
  const currentStudent = students.value.find((s) => s._id === studentId);
  if (currentStudent) {
    currentStudent.status = status;
  }
};

const NotOpenYet = async () => {
  alert("尚未開放");
};
</script>
