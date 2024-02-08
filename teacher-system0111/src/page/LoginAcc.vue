<!-- page 電郵登入 (暫不使用) -->
<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-2 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-5 lg:pl-10"
    >
      <span class="text-white font-inter text-xs font-semibold tracking-wide"
        >復興高中<br />智慧出缺勤系統</span
      >
      <span class="fixed top-5 right-5 text-white font-light">Login</span>
    </nav>
    <div class="p-8"></div>
    <div
      class="flex justify-center items-center relative w-screen overflow-x-hidden flex-col py-36"
    >
      <form @submit.prevent="login">
        <div class="flex flex-col items-center">
          <label for="email">
            <span class="font-semibold text-lg pb-3 text-[#3D3D3D]">帳號</span>
            <br />
            <input
              id="email"
              v-model.trim="email"
              required
              type="text"
              placeholder="輸入您的帳號名稱"
              class="text-md border border-[#3D3D3D] rounded-md text-center bg-[#F6F6F6] w-72 h-11"
              autocomplete="email"
            />
          </label>
          <div class="p-2"></div>
          <label for="password">
            <span class="font-semibold text-lg pb-3 text-[#3D3D3D]">密碼 </span>
            <br />
            <input
              v-model.trim="password"
              type="password"
              placeholder="輸入您的密碼"
              class="text-md border border-[#3D3D3D] rounded-md text-center bg-[#F6F6F6] w-72 h-11"
              id="password"
              autocomplete="current-password"
            />
          </label>
        </div>

        <div class="flex justify-center items-center pt-12">
          <button
            type="submit"
            @click="login"
            class="text-md px-4 py-2 bg-[#3D3D3D] rounded-md text-center text-white"
          >
            登入
          </button>
        </div>
        <div v-if="errorMsg" class="text-red-500">{{ errorMsg }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { ref } from "vue";
// import { useRouter } from "vue-router";

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
// const email = ref(""); // Define email variable
// const password = ref(""); // Define password variable
// const errorMsg = ref("");

// const router = useRouter();
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { app } from "../main";

const auth = getAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const login = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = "帳號名稱或密碼不能為空";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);

    router.push("/home");
  } catch (error) {
    errorMsg.value = "Login Fail! " + error.message;
    console.error("Login Fail!", error.message);
  }
};
</script>
