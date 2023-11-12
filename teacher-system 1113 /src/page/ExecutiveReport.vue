<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide"
          >復興高中<br />智慧出缺勤系統</span
        >
      </div>
    </nav>
    <div class="p-12"></div>
    <button class="text-2xl fixed left-4 top-20 text-center" @click="goBack">
      ←
    </button>
    <div class="flex flex-col items-center">
      <span class="text-3xl font-bold pb-10 text-[#3d3d3d] pt-12"
        >選擇日期與學生</span
      >
      <form
        @submit="submitForm"
        class="flex-col flex justify-center items-center"
      >
        <!-- 輸入元素和按鈕 -->
        <div class="flex-col flex gap-8">
          <div class="gap-2 flex items-center">
            <span class="text-xl font-semibold justify-start pl-4">日期：</span
            ><input
              class="rounded-md bg-white drop-shadow-md py-3 w-64 px-2"
              type="date"
              id="searchdate"
              name="searchdate"
              min="2021-01-01"
              :max="maxDate"
              required
            />
          </div>

          <div class="gap-2 flex items-center">
            <span class="text-xl font-semibold justify-start pl-4"
              >年級：
            </span>
            <select
              class="rounded-md bg-white drop-shadow-md py-3 w-64 px-2"
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
            <span class="text-xl font-semibold justify-start pl-4">班級：</span>
            <select
              class="rounded-md bg-white drop-shadow-md py-3 w-64 px-2"
              id="searchclass"
              name="searchclass"
              required
            >
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
          <div class="gap-2 flex items-center">
            <span class="text-xl font-semibold justify-start pl-4">座號：</span>

            <select
              class="rounded-md bg-white drop-shadow-md py-3 w-64 px-2"
              id="searchseatnumber"
              name="searchseatnumber"
              required
            >
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
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
            </select>
          </div>
        </div>
        <div class="p-6"></div>
        <button type="submit">
          <div
            class="bg-[#3D3D3D] text-white text-sm rounded-lg text-center font-semibold px-5 py-2"
          >
            送出
          </div>
        </button>
      </form>
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

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const maxDate = `${year}-${month}-${day}`;

const submitForm = () => {
  const selectedDate = document.getElementById("searchdate").value;
  const selectedGrade = document.getElementById("searchgrade").value;
  const selectedClass = document.getElementById("searchclass").value;
  const selectedSeatNumber = document.getElementById("searchseatnumber").value;

  console.log("查詢日期:", selectedDate);
  console.log("查詢年級:", selectedGrade, "年級");
  console.log("查詢班級:", selectedClass, "班");
  console.log("查詢座號:", selectedSeatNumber, "號");

  router.push("/executiveresult");
};
</script>
