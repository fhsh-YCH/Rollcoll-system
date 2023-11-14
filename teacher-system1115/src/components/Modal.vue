<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div class="">
      <div
        class="bg-white rounded-lg py-5 px-7 flex flex-col justify-center items-center"
      >
        <span class="font-semibold text-xl p-1">常用晚到事由設定</span>
        <div class="p-3"></div>
        <div class="flex flex-col gap-6">
          <div>
            <span class="font-semibold text-lg pr-2">常用1</span
            ><input
              :value="common1"
              @input="$emit('update:common1', $event)"
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用2</span
            ><input
              :value="common2"
              @input="$emit('update:common2', $event)"
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用3</span
            ><input
              :value="common3"
              @input="$emit('update:common3', $event)"
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用4</span
            ><input
              :value="common4"
              @input="$emit('update:common4', $event)"
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用5</span
            ><input
              :value="common5"
              @input="$emit('update:common5', $event)"
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
        </div>

        <div class="p-3"></div>
        <button @click="saveNotes" class="cursor-pointer">
          <div
            class="bg-[#3D3D3D] text-white text-sm rounded-lg text-center font-semibold px-4 py-2"
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

// const { isModalOpen } = defineProps(["isModalOpen"]);

const { common1, common2, common3, common4, common5, isModalOpen } =
  defineProps([
    "common1",
    "common2",
    "common3",
    "common4",
    "common5",
    "isModalOpen",
  ]);

// const common1 = ref("");
// const common2 = ref("");
// const common3 = ref("");
// const common4 = ref("");
// const common5 = ref("");

const emit = defineEmits();

const saveNotes = () => {
  console.log("Common1:", common1);
  console.log("Common2:", common2);
  console.log("Common3:", common3);
  console.log("Common4:", common4);
  console.log("Common5:", common5);

  emit("closeModal", { common1, common2, common3, common4, common5 });
};
</script>
