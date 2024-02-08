<!-- page 行政人員查看報表（結果） -->
<!-- ../components/Result.vue 產生結果的component -->
<!-- "../mark/Result.json" component 的假資料 -->
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
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>
    <div class="md:flex md:justify-center md:items-center bg-[#FEFAF7]">
      <div
        class="flex flex-col justify-center items-center gap-2 lg:grid-cols-3 lg:w-10/11 md:grid-cols-2 md:grid md:gap-3 md:pl-6 lg:ml-6"
      >
        <Result />
      </div>
    </div>

    <div class="bg-[#FEFAF7] p-4"></div>
  </div>
</template>
