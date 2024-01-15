<!-- page 晚到證明填寫 -->
<!-- "../components/Modal.vue" 常用事由設定component -->

<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <button @click="superuserhome" class="text-left">
          <span
            class="text-white text-sm font-semibold tracking-wide lg:text-lg"
            >復興高中<br />智慧出缺勤系統</span
          >
        </button>
      </div>
    </nav>
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>

    <div class="p-20 md:p-20 lg:p-32"></div>

    <div class="flex justify-center items-center bg-[#FEFAF7]">
      <form class="flex flex-col justify-center items-center">
        <input
          v-model="verificationCode"
          type="number"
          placeholder="請輸入驗證碼..."
          class="p-3 rounded-md md:rounded-md h-12 w-48 lg:w-64 lg:h-12 border border-[#363C56]"
          required
        />
        <div class="p-2 md:p-3"></div>
        <button
          @click="checkVerificationCode"
          class="lg:w-28 h-10 w-14 bg-[#363C56] text-white font-semibold md:font-bold leading-3 lg:leading-6 text-md px-1 lg:text-lg rounded-md"
        >
          確認
        </button>
      </form>
      <div class="p-4"></div>

      <div class="p-6"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const verificationCode = ref("");

const router = useRouter();
const goBack = () => {
  router.back();
};
const navigateToSUSelect = () => {
  router.push("/superuserselect");
};
const checkVerificationCode = () => {
  const correctVerificationCode = 5432;

  if (verificationCode.value === correctVerificationCode) {
    navigateToSUSelect();
  } else {
    alert("驗證碼錯誤！");
  }
};
const superuserhome = () => {
  router.push("/superuserhome");
};
</script>
