<!-- <template>
  <div class="p-10"></div>
  <div
    class="border border-[#000000] rounded-md flex justify-center items-center flex-col w-80 py-5"
  >
    <div class="flex items-center gap-5">
      <span class="font-semibold text-lg">班級座號姓名</span>
      <button
        class="rounded-full px-2 text-sm py-1 text-center font-semibold text-white bg-[#A3A3A3]"
      >
        備註
      </button>
    </div>
    <div class="p-2"></div>
    <div class="flex gap-3">
      <div
        @click="selectStatus('準時')"
        :class="{
          'bg-[#7EA99F] text-white': selectedStatus === '準時',
          'bg-white text-black': selectedStatus !== '準時',
        }"
        class="border border-[#000000] rounded-lg p-6 text-lg font-semibold cursor-pointer"
      >
        準時
      </div>
      <div
        @click="selectStatus('遲到')"
        :class="{
          'bg-[#F9DC67] text-white': selectedStatus === '遲到',
          'bg-white text-black': selectedStatus !== '遲到',
        }"
        class="border border-[#000000] rounded-lg p-6 text-lg font-semibold cursor-pointer"
      >
        遲到
      </div>
      <div
        @click="selectStatus('缺席')"
        :class="{
          'bg-[#DF756E] text-white': selectedStatus === '缺席',
          'bg-white text-black': selectedStatus !== '缺席',
        }"
        class="border border-[#000000] rounded-lg p-6 text-lg font-semibold cursor-pointer"
      >
        缺席
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedStatus = ref("準時");

const selectStatus = (status) => {
  selectedStatus.value = status;
};


</script> -->
<template>
  <div
    class="border border-[#000000] rounded-md flex justify-center items-center flex-col w-72 py-3 ml-6 bg-white"
  >
    <div class="flex items-start gap-4">
      <span class="font-semibold text-lg">班級座號姓名</span>
      <button
        class="rounded-full px-2 text-sm text-center font-semibold text-white bg-[#A3A3A3]"
      >
        晚到單
      </button>
    </div>
    <div class="p-1"></div>
    <div class="flex gap-3">
      <div
        @click="selectStatus('準時')"
        :class="{
          'bg-[#7EA99F] text-white': selectedStatus === '準時',
          'bg-white text-black': selectedStatus !== '準時',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        準時
      </div>
      <div
        @click="selectStatus('遲到')"
        :class="{
          'bg-[#F9DC67] text-white': selectedStatus === '遲到',
          'bg-white text-black': selectedStatus !== '遲到',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        遲到
      </div>
      <div
        @click="selectStatus('缺席')"
        :class="{
          'bg-[#DF756E] text-white': selectedStatus === '缺席',
          'bg-white text-black': selectedStatus !== '缺席',
        }"
        class="border border-[#000000] rounded-lg py-2 px-3 text-lg font-semibold cursor-pointer"
      >
        缺席
      </div>
    </div>
    <!-- <Modal :isModalOpen="isModalOpen" @closeModal="isModalOpen = false" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
// import Modal from "./Modal.vue";

const selectedStatus = ref("準時");

const selectStatus = (status) => {
  selectedStatus.value = status;
};

// const isModalOpen = ref(false);
</script>
