<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div class="">
      <div
        class="bg-white rounded-xl py-5 px-7 flex flex-col justify-center items-center"
      >
        <span class="font-semibold text-xl p-1">常用晚到事由設定</span>
        <div class="p-3"></div>
        <div class="flex flex-col gap-6">
          <div>
            <span class="font-semibold text-lg pr-2">常用1</span
            ><input
              :value="common1"
              @input="updateCommon1"
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
              @input="updateCommon2"
              type="text"
              id="note2"
              name="note2"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用3</span
            ><input
              :value="common3"
              @input="updateCommon3"
              type="text"
              id="note3"
              name="note3"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用4</span
            ><input
              :value="common4"
              @input="updateCommon4"
              type="text"
              id="note4"
              name="note4"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用5</span
            ><input
              :value="common5"
              @input="updateCommon5"
              type="text"
              id="note5"
              name="note5"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
        </div>

        <div class="p-4"></div>
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
import { useRouter } from "vue-router";

const router = useRouter();

const common1 = ref("");
const common2 = ref("");
const common3 = ref("");
const common4 = ref("");
const common5 = ref("");

const emit = defineEmits();

const saveNotes = () => {
  console.log("Common1:", common1.value);
  console.log("Common2:", common2.value);
  console.log("Common3:", common3.value);
  console.log("Common4:", common4.value);
  console.log("Common5:", common5.value);
  router.back();
};
</script>
