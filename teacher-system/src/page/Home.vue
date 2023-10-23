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
const navigateToLateWrite = () => {
  router.push("/latewrite");
};

// const btnLogOut = () => {
//   const auth = getAuth();
//   signOut(auth)
//     .then(() => {
//       alert("您被逐出紫禁城了");
//       const user = auth.currentUser;
//       console.log(user);
//     })
//     .catch((error) => {
//       console.error("登出時發生錯誤", error);
//     });
// };

const auth = getAuth();

const btnLogOut = async () => {
  try {
    await signOut(auth);
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

const userDisplayName = ref("");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userDisplayName.value = user.displayName;
  }
});
</script>

<template>
  <div class="h-screen w-screen bg-[#FEFAF7]">
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
              >您好，{{ userDisplayName }}</span
            >
          </div>
          <button @click="btnLogOut">
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
    <div class="p-12"></div>

    <!-- 課表 -->

    <div class="flex justify-center items-center">
      <!-- <div
        class="bg-[#4B526D] font-semibold text-white rounded-md py-1 px-4 text-md"
      >
        課表
      </div> -->
      <div
        class="bg-white border border-[#4B526D] font-semibold text-[#4B526D] py-2 px-3 rounded-md text-md flex gap-2 justify-center items-center"
      >
        <div class="text-md font-normal">今日課表</div>
        <div>
          <p id="current_date">{{ formattedDate }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="p-2"></div>
    <div class="flex justify-center">
      <div class="border border-dashed border-[#4B526D] w-72"></div>
    </div> -->

    <div class="p-1"></div>
    <Table class="p-3 bg-[#FEFAF7]" />
    <div class="p-3 bg-[#FEFAF7]"></div>
    <div class="flex justify-center bg-[#FEFAF7]">
      <div class="border border-dashed border-[#4B526D] w-72"></div>
    </div>

    <div class="flex flex-col justify-center items-center py-6 bg-[#FEFAF7]">
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

      <!-- 晚到證明 -->
      <button @click="NotOpenYet">
        <!-- <button @click="navigateToLateWrite"> -->
        <!-- <Modal :isModalOpen="isModalOpen" @closeModal="isModalOpen = false" /> -->
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

      <!-- 查看出缺勤紀錄 -->
      <button @click="NotOpenYet">
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
</template>
