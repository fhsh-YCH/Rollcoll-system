<script setup>
import { useRouter } from "vue-router";
import Result from "../components/Result.vue";
// import { ref, onMounted } from "vue";
// const fakeData = ref([]);
import Json from "../mark/Result.json";

const results = Json.results;

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<template>
  <div
    class="h-screen bg-[#FEFAF7]"
    v-for="(result, index) in results"
    :key="result.id"
  >
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide"
          >復興高中<br />智慧出缺勤系統</span
        >
        <div class="pl-24 flex absolute right-5 lg:right-8 items-center">
          <span class="text-white text-sm tracking-tight lg:text-md"
            >{{ result.grade }}{{ result.class }}{{ result.seatnumber }}
            {{ result.stu_name }}</span
          >
        </div>
      </div>
    </nav>
    <div class="p-12"></div>
    <button class="text-2xl fixed left-3 top-24 text-center" @click="goBack">
      ←
    </button>
    <div class="flex flex-col justify-center items-center gap-2">
      <Result />
    </div>
  </div>
</template>
