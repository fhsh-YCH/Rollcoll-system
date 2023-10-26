<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-2 pl-6 w-screen fixed left-0 right-0 top-0 z-20"
    >
      <span class="text-white font-inter text-xs font-semibold tracking-wide">
        復興高中<br />智慧出缺勤系統
      </span>
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

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const afterSignIn = await signInWithPopup(auth, provider);

    console.log(afterSignIn);
    console.log("Success!");

    const idTokenValue = afterSignIn.user.stsTokenManager.accessToken;
    console.log("ID Token:", idTokenValue);

    const requestData = {
      id_token: idTokenValue,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idTokenValue}`,
    };

    axios
      .post(
        "https://c95a-2407-4d00-1c03-7e47-9897-12d5-bf1f-ab60.ngrok-free.app/auth/login",
        requestData,
        { headers }
      )
      .then((response) => {
        const { userId, userEmail } = response.data;
        console.log(
          `Received data from the backend - userId: ${userId}, userEmail: ${userEmail}`
        );

        redirectToNextPage();
      })
      .catch((error) => {
        console.error("Error sending request to the backend:", error);
      });
  } catch (error) {
    console.error("Fail!", error);
  }

  function redirectToNextPage() {
    router.push("/home");
  }
};
</script>
