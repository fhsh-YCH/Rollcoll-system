<!-- page 主畫面 -->
<!-- "../components/Table.vue" 當日課表的component -->
<!-- "../mark/curriculums.json" component 的假資料 -->
<script setup>
import Table from "../components/Table.vue";

import { ref, onMounted } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const currentDate = ref("");

const formatDate = (date) => {
  const options = {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    weekday: "long",
  };

  const formatted = new Intl.DateTimeFormat("default", options).format(
    new Date(date)
  );

  return formatted;
};

const formattedDate = ref("");

onMounted(() => {
  currentDate.value = new Date().toString();
  formattedDate.value = formatDate(currentDate.value);
});

import { useRouter } from "vue-router";

const router = useRouter();

const navigateToRevise = () => {
  router.push("/revise");
};

const navigateToTutor = () => {
  router.push("/tutorclass");
};
const navigateToLPsearch = () => {
  router.push("/lpsearch");
};
const navigateToExecutive = () => {
  router.push("/executivereport");
};

const navigateToSUVerify = () => {
  router.push("/superuserverify");
};
const auth = getAuth();

const btnLogOut = async () => {
  try {
    await signOut(auth);
    localStorage.clear();
    alert("成功登出~下次見！");
    router.push("/");
  } catch (error) {
    console.error("噢嗚登出時發生了一點錯誤TT", error);
  }
};

const NotOpenYet = async () => {
  alert("尚未開放");
};

// import Modal from "../components/LateModal.vue";

// const isModalOpen = ref(false);

// const displayName = ref("");
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     userDisplayName.value = user.displayName;
//   }
// });
const userDisplayName = ref("");
onMounted(() => {
  const user = JSON.parse(localStorage.getItem("User Info."));

  if (user) {
    userDisplayName.value = user.display_name;
  }
});
</script>

<template>
  <div class="h-screen w-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide lg:text-lg"
          >復興高中<br />智慧出缺勤系統</span
        >
        <div class="pl-24 flex absolute right-5 lg:right-8 items-center">
          <div class="pr-4">
            <span class="text-white text-xs tracking-tight lg:text-md"
              >您好，{{ userDisplayName }}</span
            >
          </div>
          <button @click="btnLogOut">
            <div
              class="border border-white rounded-md py-1 px-2 flex justify-center items-center lg:py-2 lg:px-3"
            >
              <span
                class="text-white text-center text-xs font-semibold tracking-wide lg:text-md"
                >登出</span
              >
            </div>
          </button>
        </div>
      </div>
    </nav>
    <div class="p-12 lg:p-16"></div>

    <!-- 課表 -->

    <div class="flex justify-center items-center">
      <!-- <div
        class="bg-[#4B526D] font-semibold text-white rounded-md py-1 px-4 text-md"
      >
        課表
      </div> -->
      <div
        class="bg-white border border-[#4B526D] font-semibold text-[#4B526D] py-2 px-3 rounded-md text-md flex gap-2 justify-center items-center lg:py-4 lg:w-3/6 lg:text-lg"
      >
        <div class="text-md font-normal lg:text-lg">今日課表</div>
        <div>
          <p id="current_date lg:text-lg">{{ formattedDate }}</p>
        </div>
      </div>
    </div>

    <div class="p-1 lg:p-3"></div>
    <div class="lg:justify-center lg:items-center lg:flex bg-[#FEFAF7]">
      <Table
        class="px-3 pt-3 bg-[#FEFAF7] grid lg:grid-cols-2 lg:gap-3 lg:w-3/5"
      />
    </div>

    <div class="p-1 bg-[#FEFAF7]"></div>
    <!-- super user btn -->
    <div class="bg-[#FEFAF7] flex justify-center items-center pb-8">
      <button
        @click="navigateToSUVerify"
        class="bg-[#4B526D] px-24 lg:px-16 py-2 lg:w-3/6 rounded-md"
      >
        <span class="font-bold text-white">SUPER USER</span>
      </button>
    </div>
    <div class="flex justify-center bg-[#FEFAF7]">
      <div class="border border-dashed border-[#4B526D] w-72 lg:w-3/4"></div>
    </div>
    <div class="lg:grid lg:justify-center lg:items-center bg-[#FEFAF7]">
      <div
        class="flex flex-col justify-center items-center py-6 bg-[#FEFAF7] lg:grid lg:grid-cols-2 lg:gap-2"
      >
        <!-- 修改當日出缺勤狀態 -->

        <!-- 晚到證明 -->
        <!-- <button @click="NotOpenYet"> -->
        <button @click="navigateToLPsearch">
          <!-- <Modal :isModalOpen="isModalOpen" @closeModal="isModalOpen = false" /> -->
          <div class="flex items-center">
            <div
              class="text-[#4B526D] rounded-full px-8 py-4 flex items-center"
            >
              <div class="pr-4 lg:pr-4">
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
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M12.6202 23.1367C18.4284 23.1367 23.1368 18.4282 23.1368 12.62C23.1368 6.8118 18.4284 2.10333 12.6202 2.10333C6.81199 2.10333 2.10352 6.8118 2.10352 12.62C2.10352 18.4282 6.81199 23.1367 12.6202 23.1367Z"
                  stroke="#4B526D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6201 6.31V12.62L16.8268 14.7233"
                  stroke="#4B526D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-md pl-4 pr-12">晚到證明事由</span>
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
        <!-- <button @click="NotOpenYet"> -->
        <button @click="navigateToTutor">
          <div class="flex items-center">
            <div
              class="text-[#4B526D] rounded-full px-8 py-4 flex items-center"
            >
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
        <!-- 查看出缺勤紀錄 -->
        <!-- <button @click="NotOpenYet"> -->
        <button @click="navigateToExecutive">
          <div class="flex items-center">
            <div
              class="text-[#4B526D] rounded-full px-8 py-4 flex items-center"
            >
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
              <span class="text-md pl-4 pr-8">查看出缺勤紀錄</span>
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
      </div>
    </div>

    <footer class="bg-[#FEFAF7] w-full pt-5">
      <div
        class="bottom-0 bg-[#ECE7E4] py-4 md:py-3 w-full flex justify-center items-center"
      >
        <div
          class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 md:gap-2 gap-1 px-1 text-[#fff] lg:gap-3 text-xs md:text-sm"
        >
          <span>DESIGNED BY 楊沁璇</span>
          <span>CREATED BY 楊沁璇 陳晉</span>
          <span>MENTORED BY 陳晉</span>
          <span> POWERED BY FHSH IT DEPT</span>
        </div>
      </div>
    </footer>
  </div>
</template>
