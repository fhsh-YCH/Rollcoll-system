<template>
  <!-- 修改當日出缺勤狀態 -->
  <button @click="NotOpenYet">
    <!-- <button @click="navigateToRevise"> -->
    <div class="flex items-center">
      <div class="text-[#4B526D] rounded-full px-8 py-4 flex items-center">
        <!-- <div class="border-l-4 border-[#4B526D] bg-white py-4 px-1"></div> -->
        <div class="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="36"
            viewBox="0 0 4 44"
            fill="none"
          >
            <path
              d="M2 2V42"
              stroke="#4B526D"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <img src="../assets/edit_4B526D.svg" class="w-6 h-6" />
        <span class="text-md pl-4">修改當日出缺勤狀態</span>
        <div class="pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#4B526D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>

  <!-- 查看導班出缺勤紀錄 -->

  <button @click="NotOpenYet">
    <!-- <button @click="navigateToTutor"> -->
    <div class="flex items-center">
      <div class="text-[#4B526D] rounded-full px-8 py-4 flex items-center">
        <div class="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="36"
            viewBox="0 0 4 44"
            fill="none"
          >
            <path
              d="M2 2V42"
              stroke="#4B526D"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="../assets/file_4B526D.svg" class="w-6 h-6" />
        <span class="text-md pl-4">查看導班出缺勤紀錄</span>
        <div class="pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#4B526D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>
