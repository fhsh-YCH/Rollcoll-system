<template>
  <div
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div class="">
      <div
        class="bg-white rounded-lg py-8 px-10 flex flex-col justify-center items-center"
      >
        <span class="font-black text-2xl text-[#252525] p-1">晚到單</span>
        <div class="p-2"></div>
        <div class="">
          <div
            v-for="(lateproof, index) in lateProofs"
            :key="lateproof.id"
            class="flex flex-col gap-4"
          >
            <div>
              <span class="font-semibold text-[#252525] text-lg">學生：</span
              ><span class="text-[#252525] text-lg">{{
                lateproof.stu_name
              }}</span>
            </div>
            <div>
              <span class="font-semibold text-[#252525] text-lg"
                >離開時間：</span
              ><span class="text-[#252525] text-lg">{{
                lateproof.leave_time
              }}</span>
            </div>
            <div>
              <span class="font-semibold text-[#252525] text-lg"
                >晚到事由：</span
              ><span class="text-[#252525] text-lg">{{
                lateproof.late_reason
              }}</span>
            </div>
            <div>
              <span class="font-semibold text-[#252525] text-lg"
                >承辦師長：</span
              ><span class="text-[#252525] text-lg">{{
                lateproof.teacher_name
              }}</span>
            </div>
          </div>
        </div>

        <div class="p-3"></div>
        <button @click="closed" class="cursor-pointer">
          <div
            class="bg-[#252525] text-white text-sm rounded-md text-center font-semibold px-3 py-1"
          >
            關閉
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Json from "../mark/LateProof.json";

const lateProofs = Json.lateproofs;
// const { isModalOpen } = defineProps(["isModalOpen"]);
</script>
