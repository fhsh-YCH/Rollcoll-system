<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigateToHome = () => {
  router.push("/home");
};
</script>
<template>
  <div
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div
      class="bg-white border border-[#252525] rounded-lg pt-10 pb-8 w-72 flex flex-col justify-center items-center"
    >
      <div class="leading-none flex flex-col justify-center items-center">
        <span class="khmer font-semibold text-center">404</span>
        <span class="Inter font-bold text-center">找不到</span>
      </div>

      <div class="pt-6">
        <button
          @click="navigateToHome"
          class="bg-[#363C56] text-white rounded-md py-1 px-2 text-sm font-semibold tracking-wider"
        >
          確定
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.khmer {
  color: #363c56;
  font-family: Khmer MN;

  font-size: 2.8rem;
  letter-spacing: 0.34375rem;
}
.Inter {
  color: #363c56;
  font-family: Inter;
  font-size: 3rem;

  letter-spacing: 0.34375rem;
}
</style>
