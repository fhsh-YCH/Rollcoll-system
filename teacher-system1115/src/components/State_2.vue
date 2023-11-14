<template>
  <div v-for="(student, index) in fakeData.students" :key="student.id">
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
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Json from "../mark/StudentStatus_2.json";

const fakeData = ref({
  students: [],
});

onMounted(() => {
  fakeData.value = Json;
});
</script>

<!-- v-for="(student, index) in fakeData.students"
    :key="student.id" -->
