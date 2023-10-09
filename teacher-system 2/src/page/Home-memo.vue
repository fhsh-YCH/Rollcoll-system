<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToRevise = () => {
  router.push("/revise");
};
</script>

<template>
  <div class="h-screen bg-[#FFFFFF]">
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
          <button @click="logout">
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

    <!-- 課表 -->
    <div class="flex flex-col justify-center items-center py-4">
      <div
        class="bg-[#4B526D] py-1 px-36 text-white font-semibold text-md text-center"
      >
        課表
      </div>
      <div class="p-1"></div>
      <table class="border-collapse border border-black">
        <tr>
          <th
            class="border border-black text-md font-semibold py-1"
            colspan="2"
          >
            上午
          </th>

          <th
            class="border border-black text-md font-semibold py-1"
            colspan="2"
          >
            下午
          </th>
        </tr>
        <tr>
          <td class="border border-black text-center p-2 text-xs">
            第<br />一<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="first" class="px-12 py-5">{{}}課程</button>
          </td>
          <td class="border border-black text-center p-2 text-xs">
            第<br />五<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="fifth" class="px-12 py-5">{{}}課程</button>
          </td>
        </tr>
        <tr>
          <td class="border border-black text-center p-2 text-xs">
            第<br />二<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="second" class="px-12 py-5">{{}}課程</button>
          </td>
          <td class="border border-black text-center p-2 text-xs">
            第<br />六<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="sixth" class="px-12 py-5">{{}}課程</button>
          </td>
        </tr>
        <tr>
          <td class="border border-black text-center p-2 text-xs">
            第<br />三<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="third" class="px-12 py-5">{{}}課程</button>
          </td>
          <td class="border border-black text-center p-2 text-xs">
            第<br />七<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="seventh" class="px-12 py-5">{{}}課程</button>
          </td>
        </tr>
        <tr>
          <td class="border border-black text-center p-2 text-xs">
            第<br />四<br />節
          </td>
          <td class="border border-black text-center text-md font-semibold">
            <button id="fourth" class="px-12 py-5">{{}}課程</button>
          </td>
          <td
            colspan="2"
            class="border border-black text-center text-md font-semibold px-12"
          >
            星期{{}}一
          </td>
        </tr>
      </table>
    </div>
    <div class="flex flex-col justify-center items-center py-6">
      <!-- 修改當日出缺勤狀態 -->
      <button @click="navigateToRevise">
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

<!-- <script setup>
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD_IWY-kE4HI-7FJYKk7eEfq3kc-A8xvYE",
//   authDomain: "teacher-system.firebaseapp.com",
//   projectId: "teacher-system",
//   storageBucket: "teacher-system.appspot.com",
//   messagingSenderId: "204070774937",
//   appId: "1:204070774937:web:ac179e72dc909b7023b008",
//   measurementId: "G-DSSJ1V395R",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth();
import { ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const app = $app; // 引入已初始化的 Firebase 实例

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    console.log("Success!");

    redirectToNextPage();
  } catch (error) {
    console.error("Fail!", error);
  }

  function redirectToNextPage() {
    window.location.href = "/home";
  }
};
</script> -->
