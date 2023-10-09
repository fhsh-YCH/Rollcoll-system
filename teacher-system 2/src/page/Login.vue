<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-2 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <span class="text-white font-inter text-xs font-semibold tracking-wide"
        >復興高中<br />智慧出缺勤系統</span
      >
      <!-- <span class="fixed top-5 right-5 text-white font-light"
        >Login with Google</span
      > -->
    </nav>
    <div class="p-8"></div>
    <div class="flex justify-center items-center">
      <div class="py-64"></div>
      <button
        class="bg-[#4B526D] py-5 px-12 rounded-xl text-center shadow-md"
        @click="loginWithGoogle"
      >
        <span class="text-white font-bold text-3xl">Google 登入</span>
      </button>
    </div>
  </div>
</template>

<!-- <script setup>
import { ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import { app } from "../main";

// const loginWithGoogle = async () => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const afterSignIn = await signInWithPopup(auth, provider);

//     console.log(afterSignIn);

//     console.log("Google 登入成功!");

//     redirectToNextPage();
//     getIdTokenAndLog();
//   } catch (error) {
//     console.error("Google 登入失敗:", error);
//   }

//   function redirectToNextPage() {
//     router.push("/home");
//   }
// };

const auth = getAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const afterSignIn = await signInWithPopup(auth, provider);

    console.log(afterSignIn);

    console.log("Success!");

    redirectToNextPage();
  } catch (error) {
    console.error("Fail!", error);
  }

  function redirectToNextPage() {
    router.push("/home");
  }
};

const login = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = "帳號名稱或密碼不能為空";
    return;
  }

  try {
    await app.signInWithEmailAndPassword(auth, email.value, password.value);

    router.push("/home");
  } catch (error) {
    errorMsg.value = "Login Fail! " + error.message;
    console.error("Login Fail!", error.message);
  }
};
</script> -->
<script setup>
import { ref, onMounted } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import { app } from "../main";

const auth = getAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const idToken = ref("");

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const afterSignIn = await signInWithPopup(auth, provider);

    console.log(afterSignIn);

    console.log("Success!");

    const idToken = afterSignIn.user.stsTokenManager.accessToken;
    console.log("ID Token:", idToken);

    redirectToNextPage();
  } catch (error) {
    console.error("Fail!", error);
  }

  function redirectToNextPage() {
    router.push("/home");
  }
};

const login = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = "帳號名稱或密碼不能為空";
    return;
  }

  try {
    await app.signInWithEmailAndPassword(auth, email.value, password.value);

    router.push("/home");
  } catch (error) {
    errorMsg.value = "Login Fail! " + error.message;
    console.error("Login Fail!", error.message);
  }
};

onMounted(() => {
  if (auth.currentUser) {
    auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then((idTokenValue) => {
        idToken.value = idTokenValue;
        console.log("當前使用者的 ID Token:", idTokenValue);
      })
      .catch((error) => {
        console.error("獲取 ID Token 時發生錯誤:", error);
      });
  }
});
</script>
