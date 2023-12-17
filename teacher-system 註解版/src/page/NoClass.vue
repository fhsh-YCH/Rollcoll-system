<!-- page 整天沒課 -->

<script setup>
// import { ref } from "vue";

// // 在context中访问$router
// const { router } = context;

// const message = ref("");

// const logout = () => {
//   console.log("Logout!");
//
//   router.push("/");
// };
// @click="logout"
</script>
<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide"
          >復興高中<br />智慧出缺勤系統</span
        >
        <div class="pl-24 flex absolute right-5">
          <div class="pr-4">
            <span class="text-white text-xs tracking-tight"
              >您好，{{}}xxx老師</span
            >
          </div>
          <button>
            <div
              class="border border-white rounded-md py-1 px-2 flex justify-center items-center"
            >
              <span
                class="text-white text-center text-xs font-semibold tracking-wide"
                >登出</span
              >
            </div>
          </button>
        </div>
      </div>
    </nav>
    <div class="p-8"></div>

    <div class="flex flex-col justify-center items-center py-4">
      <div
        class="bg-[#4B526D] py-1 px-36 text-white font-semibold text-md text-center"
      >
        課表
      </div>
      <div class="p-1"></div>
      <div class="border border-black px-24 py-28">
        <span>Yeah 今天沒課！</span>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center py-6">
      <!-- 修改當日出缺勤狀態 -->
      <button>
        <div class="flex items-center">
          <div class="bg-[#E2E2E2] rounded-full px-8 py-5 flex items-center">
            <img src="../assets/edit_icon.png" class="w-6 h-6" />
            <span class="text-md pl-4">修改當日出缺勤狀態</span>
          </div>
        </div>
      </button>
      <div class="p-2"></div>

      <!-- 查看導班出缺勤紀錄 -->
      <button>
        <div class="flex items-center">
          <div class="bg-[#E2E2E2] rounded-full px-8 py-5 flex items-center">
            <img src="../assets/docs.png" class="w-6 h-6" />
            <span class="text-md pl-4">查看導班出缺勤紀錄</span>
          </div>
        </div>
      </button>

      <div class="p-2"></div>

      <!-- 查看出缺勤紀錄 -->
      <button>
        <div class="flex items-center">
          <div class="bg-[#E2E2E2] rounded-full px-8 py-5 flex items-center">
            <img src="../assets/docs.png" class="w-6 h-6" />
            <span class="text-md pl-4 pr-8">查看出缺勤紀錄</span>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
