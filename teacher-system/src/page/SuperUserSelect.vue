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
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl"
      @click="goBack"
    >
      ←
    </button>

    <div class="p-12 md:p-20 lg:p-16"></div>

    <div class="flex flex-col items-center bg-[#FEFAF7]">
      <span class="text-2xl font-bold pb-8 md:pb-10 md:text-4xl lg:text-3xl"
        >選擇點名班級</span
      >

      <div class="flex flex-col gap-10 justify-center items-start px-10">
        <div class="gap-2 flex items-center">
          <span class="text-lg font-semibold md:text-xl justify-start pl-2"
            >年級：
          </span>
          <select
            class="rounded-md bg-white drop-shadow-md h-12 w-52 px-2 md:w-60 md:h-14"
            id="searchgrade"
            name="searchgrade"
            required
          >
            <option value="" disabled selected>請選擇</option>
            <option value="1" id="grade1">1</option>
            <option value="2" id="grade2">2</option>
            <option value="3" id="grade3">3</option>
          </select>
        </div>
        <div class="gap-2 flex items-center">
          <span class="text-lg md:text-xl font-semibold justify-start pl-2"
            >班級：</span
          >
          <select
            class="rounded-md bg-white drop-shadow-md h-12 w-52 px-2 md:w-60 md:h-14"
            id="searchclass"
            name="searchclass"
            required
          >
            <label for="city" class="mr-2 col-form-label">縣市</label>
            <!-- <select
              class="form-control"
              id="city"
              v-model="select.city"
              @change="select.area = ''"
            >
              <option value>-- 請選擇縣市 --</option>
              <option
                v-for="item in cityName"
                :value="item.CityName"
                :key="item.CityName"
              >
                {{ item.CityName }}
              </option>
            </select> -->
            <option value="" disabled selected>請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
          </select>
        </div>
      </div>
      <div class="p-2"></div>

      <div class="p-5 md:p-6"></div>

      <div class="flex gap-3">
        <button class="cursor-pointer bg-[#FEFAF7]" @click="save">
          <div
            class="bg-[#363C56] text-white font-semibold rounded-md py-2 px-5 md:py-2 md:px-5 md:text-md"
          >
            送出
          </div>
        </button>
      </div>
      <div class="p-6"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.back();
};

const selectedGrade = ref("one");
const selectedClassroom = ref(1);

const save = () => {
  const userData = {
    grade: selectedGrade.value,
    classroom: selectedClassroom.value,
  };
  console.log("LateModalContent:", userData);

  router.push("/name");
};

const isModalOpen = ref(false);
const superuserhome = () => {
  router.push("/superuserhome");
};
</script>
