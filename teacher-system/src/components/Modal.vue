<template>
  <!-- 使用 v-if 条件渲染，只有在 isModalOpen 为 true 时才显示模态框 -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div class="">
      <div
        class="bg-white rounded-md py-4 px-7 flex flex-col justify-center items-center"
      >
        <span class="font-semibold text-xl">備註</span>
        <div class="p-1"></div>
        <!-- 使用 v-model 将输入与 notes 变量绑定 -->
        <input
          v-model="notes"
          type="text"
          id="notes"
          name="notes"
          class="bg-[#e2e2e2] py-12 rounded-md text-center"
          placeholder="Type here..."
        />

        <div class="p-1"></div>
        <button @click="saveNotes">
          <div
            class="border border-[#3D3D3D] rounded-lg text-center font-semibold px-2 py-1"
          >
            確定
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";

const { isModalOpen } = defineProps(["isModalOpen"]);

const notes = ref("");

const emit = defineEmits();

const saveNotes = () => {
  console.log("User input:", notes.value);
  emit("closeModal");
};
</script>
