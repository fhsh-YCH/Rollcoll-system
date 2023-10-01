<script setup>
import Student from "../components/Student.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.back();
};
import { ref, onMounted } from "vue";

const currentDate = ref("");

const formatDate = (date) => {
  const options = {
    weekday: "long",
  };

  const formatted = new Intl.DateTimeFormat("default", options).format(
    new Date(date)
  );

  return formatted;
};

const formattedDate = ref("");

onMounted(() => {
  currentDate.value = new Date().toString();
  formattedDate.value = formatDate(currentDate.value);
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
        <div class="pl-24 flex absolute right-5">
          <span class="text-white text-right text-xs tracking-wider">
            {{ formattedDate }} 節次一 國文</span
          >
        </div>
      </div>
    </nav>
    <button class="text-2xl fixed left-4 top-20 text-center" @click="goBack">
      ←
    </button>
    <!-- <button class="absolute bottom-7 left-7" @click="goBack">
      <div
        class="bg-[#e2e2e2] rounded-full py-4 px-5 text-3xl font-semibold border border-black"
      >
        ←
      </div>
    </button> -->
    <div class="p-10"></div>
    <div class="flex flex-col justify-center items-center gap-2">
      <Student />
      <Student />
      <Student />
      <Student />
      <Student />
    </div>
    <div class="flex justify-center items-center p-8 bg-[#FEFAF7]">
      <button>
        <div class="bg-[#3D3D3D] text-white font-semibold rounded-md py-2 px-5">
          送出
        </div>
      </button>
    </div>
  </div>
</template>
