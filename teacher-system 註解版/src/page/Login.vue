<!-- page google login -->
<template>
  <div class="h-screen bg-[#FEFAF7]">
    <!-- navbar -->
    <nav
      class="bg-[#363C56] py-2 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <span
        class="text-white font-inter text-xs font-semibold tracking-wide lg:text-lg"
      >
        復興高中<br />智慧出缺勤系統
      </span>
    </nav>
    <div class="p-8"></div>
    <div class="flex justify-center items-center">
      <div class="py-64"></div>
      <button
        class="bg-[#4B526D] py-5 px-8 rounded-xl text-center shadow-md flex justify-center items-center gap-5"
        @click="loginWithGoogle"
      >
        <img src="../assets/search.png" class="w-10" />
        <span class="text-white font-bold text-3xl">Google 登入</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // firebaselogin
import axios from "axios"; // connect to axios
import { useRouter } from "vue-router"; // vue-router
import Google from "../assets/search.png";

const auth = getAuth();
const router = useRouter();

// google firebase OAuth login
const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const afterSignIn = await signInWithPopup(auth, provider);

    const idTokenValue = afterSignIn.user.stsTokenManager.accessToken;
    // const accessTokenValue = afterSignIn.user.stsTokenManager.accessToken;
    // localStorage.setItem("Token", idTokenValue);
    // localStorage.setItem("accessToken", accessTokenValue);

    // console.log(afterSignIn);
    console.log("Success!");

    const requestData = {
      id_token: idTokenValue,
    };

    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${idTokenValue}`,
    };

    axios
      .post("https://server-api.fhh4ck3rs.taipei/auth/login", requestData, {
        headers,
      })
      .then((response) => {
        const { token, userEmail } = response.data;
        // console.log(
        //   `Received data from the backend - token: ${token}, userEmail: ${userEmail}`
        // );
        localStorage.setItem("token", token);

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

// import axios from 'axios'
// import storage from "@src/services/storage";
// import constant from "@src/constants";

// 全局設定 AJAX Request 攔截器 (interceptor)
axios.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 全局設定 AJAX Response 攔截器 (interceptor)
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      // server responded status code falls out of the range of 2xx
      switch (error.response.status) {
        case 400:
          {
            const { message } = error.response.data;
            alert(`${error.response.status}: ${message || "資料錯誤"}。`);
          }

          break;

        case 401:
          {
            // 當不是 refresh token 作業發生 401 才需要更新 access token 並重發
            // 如果是就略過此刷新 access token 作業，直接不處理(因為 catch 已經攔截處理更新失敗的情況了)
            const refreshTokeUrl = `${constant.apiUrl}users/refresh-token/`;
            if (error.config.url !== refreshTokeUrl) {
              // 原始 request 資訊
              const originalRequest = error.config;

              // 依據 refresh_token 刷新 access_token 並重發 request
              return axios
                .post(refreshTokeUrl) // refresh_toke is attached in cookie
                .then((response) => {
                  // [更新 access_token 成功]

                  // 刷新 storage (其他呼叫 api 的地方都會從此處取得新 access_token)
                  storage.token.value = response.data.jwtToken;

                  return axios(originalRequest);
                })
                .catch((err) => {
                  // [更新 access_token 失敗] ( e.g. refresh_token 過期無效)
                  storage.token.value = "";
                  alert(
                    `${err.response.status}: 作業逾時或無相關使用授權，請重新登入`
                  );
                  window.location.href = "/login";
                  return Promise.reject(error);
                });
            }
          }

          break;

        case 404:
          alert(`${error.response.status}: 資料來源不存在`);
          break;

        case 500:
          alert(`${error.response.status}: 內部系統發生錯誤`);
          break;

        default:
          alert(
            `${error.response.status}: 系統維護中，造成您的不便，敬請見諒。`
          );

          break;
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      if (
        error.code === "ECONNABORTED" &&
        error.message &&
        error.message.indexOf("timeout") !== -1
      ) {
        // request time out will be here
        alert("網路連線逾時，請點「確認」鍵後繼續使用。");
      } else {
        // shutdonw api server
        alert("網路連線不穩定，請稍候再試");
      }
    }

    return Promise.reject(error);
  }
);
</script>
