<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40 pt-6"
  >
    <div class="">
      <div
        class="bg-white rounded-lg py-6 px-7 flex flex-col justify-center items-center"
      >
        <span class="font-semibold text-xl text-[#3D3D3D]">晚到證明</span>
        <div class="p-3"></div>

        <div class="flex flex-col gap-4">
          <!-- 年級 -->
          <div class="flex gap-2">
            <span class="font-semibold text-[#3D3D3D]">年級：</span>
            <form class="flex gap-2 text-[#3D3D3D]">
              <input
                type="radio"
                name="grade"
                value="one"
                id="one"
                v-model="selectedGrade"
              />
              <label for="one">1</label><br />

              <input
                type="radio"
                name="grade"
                value="two"
                id="two"
                v-model="selectedGrade"
              />
              <label for="two">2</label><br />

              <input
                type="radio"
                name="grade"
                value="three"
                id="three"
                v-model="selectedGrade"
              />
              <label for="three">3</label><br />
            </form>
          </div>

          <!-- 班級 -->
          <div class="flex">
            <div>
              <label for="classroom" class="font-semibold text-[#3D3D3D]"
                >班級：</label
              >
              <select
                name="classroom"
                id="classroom"
                class="py-1 px-6 border border-black rounded-md"
                v-model="selectedClassroom"
              >
                <!-- 使用v-for循环生成选项 -->
                <option
                  v-for="classroom in classrooms"
                  :key="classroom"
                  :value="classroom"
                >
                  {{ classroom }}
                </option>
              </select>
            </div>
          </div>

          <!-- 座號 -->
          <div class="flex">
            <div>
              <label for="number" class="font-semibold text-[#3D3D3D]"
                >座號：</label
              >
              <select
                name="number"
                id="number"
                class="py-1 px-6 border border-black rounded-md"
                v-model="selectedNumber"
              >
                <!-- 使用v-for循环生成选项 -->
                <option v-for="number in numbers" :key="number" :value="number">
                  {{ number }}
                </option>
              </select>
            </div>
          </div>

          <!-- 離開時間 -->
          <div class="flex items-center">
            <span class="font-semibold text-[#3D3D3D]">離開時間：</span>
            <input
              v-model="leaveTime"
              type="text"
              id="leaveTime"
              name="leaveTime"
              class="bg-[#e2e2e2] px-2 rounded-md text-left text-md py-1"
              placeholder="Type here..."
            />
          </div>

          <!-- 晚到事由： -->
          <div class="flex flex-col pt-3">
            <span class="font-semibold text-left text-[#3D3D3D]"
              >晚到事由：</span
            >
            <div class="p-1"></div>
            <input
              v-model="lateReason"
              type="text"
              id="lateReason"
              name="lateReason"
              class="bg-[#e2e2e2] py-12 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
        </div>

        <div class="p-3"></div>

        <div class="flex gap-3">
          <button @click="saveAndCloseModal" class="cursor-pointer">
            <div
              class="border border-[#3D3D3D] bg-[#4B526D] text-white rounded-lg text-center font-semibold px-2 py-1"
            >
              確定
            </div>
          </button>
          <!-- <button @click="CloseModal" class="cursor-pointer">
            <div
              class="border border-[#3D3D3D] bg-[#4B526D] text-white rounded-lg text-center font-semibold px-2 py-1"
            >
              closed
            </div>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
const { isModalOpen } = defineProps(["isModalOpen"]);

const emit = defineEmits();

// const saveAndCloseModal = () => {
// //   console.log(
// //     "User input:grade",
// //     selectedGrade.value,
// //     "classroom",
// //     selectedClassroom.value,
// //     "number",
// //     selectedNumber.value,
// //     "leaveTime",
// //     leaveTime.value,
// //     "lateReason",
// //     lateReason.value
// //   );
//   emit("closeModal");
// };

const selectedGrade = ref("one");
const selectedClassroom = ref(1);
const selectedNumber = ref(1);
const leaveTime = ref("");
const lateReason = ref("");
const classrooms = ref(Array.from({ length: 22 }, (_, index) => index + 1));
const numbers = ref(Array.from({ length: 40 }, (_, index) => index + 1));
// const emit = defineEmits();

const saveAndCloseModal = () => {
  const userData = {
    grade: selectedGrade.value,
    classroom: selectedClassroom.value,
    number: selectedNumber.value,
    leaveTime: leaveTime.value,
    lateReason: lateReason.value,
  };
  console.log("LateModalContent:", userData);

  emit("closeModal");
};
// const CloseModal = () => {
//   //   const userData = {
//   //     grade: selectedGrade.value,
//   //     classroom: selectedClassroom.value,
//   //     number: selectedNumber.value,
//   //     leaveTime: leaveTime.value,
//   //     lateReason: lateReason.value,
//   //   };
//   //   console.log("LateModalContent:", userData);

//   emit("closeModal");
// };
</script>
