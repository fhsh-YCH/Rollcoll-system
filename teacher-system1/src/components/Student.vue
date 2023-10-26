<template>
  <div
    v-for="(student, index) in fakeData.students"
    :key="student.id"
    class="border border-[#000000] rounded-md flex justify-center items-center flex-col w-72 py-3 ml-6 bg-white"
  >
    <div class="flex items-start gap-4">
      <div>
        <span class="font-semibold text-lg"
          >{{ student.class }}{{ student.seatnumber }} {{ student.name }}</span
        >
      </div>

      <button
        class="rounded-full px-2 text-sm text-center font-semibold text-white bg-[#A3A3A3]"
      >
        晚到單
      </button>
    </div>
    <div class="p-1"></div>
    <div class="flex gap-3">
      <div
        @click="selectStatus('準時', student.id)"
        :class="{
          'bg-[#7EA99F] text-white': selectedStatus === '準時',
          'bg-white text-black': selectedStatus !== '準時',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        準時
      </div>
      <div
        @click="selectStatus('遲到', student.id)"
        :class="{
          'bg-[#F9DC67] text-white': selectedStatus === '遲到',
          'bg-white text-black': selectedStatus !== '遲到',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        遲到
      </div>
      <div
        @click="selectStatus('缺席', student.id)"
        :class="{
          'bg-[#DF756E] text-white': selectedStatus === '缺席',
          'bg-white text-black': selectedStatus !== '缺席',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        缺席
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const fakeData = ref([]);

const selectedStatus = ref("準時");

const selectStatus = (status) => {
  selectedStatus.value = status;
};

onMounted(async () => {
  try {
    const response = await axios.get("./data.json");
    fakeData.value = response.data;
  } catch (error) {
    console.error("Error loading JSON data", error);
  }
});
</script>
