<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigateToLogin = () => {
  router.push("/");
};
</script>
<template>
  <div
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div
      class="bg-white border border-[#252525] rounded-lg px-5 pt-10 pb-8 flex flex-col justify-center items-center"
    >
      <div class="leading-none flex flex-col justify-center items-center">
        <span class="khmer font-semibold text-center">500</span>
        <span class="Inter font-bold text-center">內部伺服器錯誤</span>
      </div>

      <div class="pt-6">
        <button
          @click="navigateToLogin"
          class="bg-[#363C56] text-white rounded-md py-1 px-2 text-sm font-semibold tracking-wider"
        >
          重新登入
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.khmer {
  color: #363c56;
  font-family: Khmer MN;

  font-size: 2.4rem;
  letter-spacing: 0.34375rem;
}
.Inter {
  color: #363c56;
  font-family: Inter;
  font-size: 2.4rem;

  letter-spacing: 0.34375rem;
}
</style>
