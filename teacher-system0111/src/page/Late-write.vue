<!-- page 晚到證明填寫 -->
<!-- "../components/Modal.vue" 常用事由設定component -->

<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide lg:text-lg"
          >復興高中<br />智慧出缺勤系統</span
        >
        <div class="pl-24 flex absolute right-5">
          <button @click="isModalOpen = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M22.3799 10.9364L22.7601 9.91558L21.6747 7.29579L20.684 6.84371L19.5372 7.226L19.2507 7.13642C18.8778 6.67808 18.4559 6.25725 17.9945 5.88225L17.9049 5.59371L18.2872 4.44579L17.8351 3.45517L15.2153 2.36975L14.1955 2.751L13.6538 3.83329L13.3872 3.97288C12.7955 3.91142 12.1997 3.91038 11.6122 3.97079L11.3455 3.83225L10.8049 2.75204L9.78509 2.36975L7.16426 3.45517L6.71217 4.44579L7.09447 5.59163L7.00384 5.87913C6.54551 6.25204 6.12363 6.67392 5.74967 7.13538L5.46217 7.22496L4.3153 6.84267L3.32467 7.29475L2.23926 9.91558L2.61947 10.9364L3.70176 11.4781L3.84134 11.7448C3.77988 12.3354 3.77988 12.9312 3.83926 13.5198L3.70072 13.7864L2.62051 14.327L2.2403 15.3479L3.32572 17.9677L4.31634 18.4198L5.46217 18.0385L5.74863 18.1281C6.12155 18.5864 6.54342 19.0073 7.00488 19.3823L7.09447 19.6687L6.71217 20.8166L7.1653 21.8073L9.78509 22.8927L10.8059 22.5114L11.3465 21.4302L11.6132 21.2906C12.2049 21.352 12.8007 21.352 13.3893 21.2916L13.6549 21.4312L14.1955 22.5114L15.2153 22.8916L17.8351 21.8062L18.2872 20.8156L17.9059 19.6698L17.9955 19.3833C18.4549 19.0093 18.8757 18.5875 19.2497 18.127L19.5361 18.0375L20.684 18.4198L21.6747 17.9677L22.7601 15.3468L22.3799 14.326L21.2976 13.7843L21.158 13.5187C21.2195 12.9281 21.2195 12.3323 21.1601 11.7427L21.2986 11.476L22.3799 10.9364ZM20.5893 10.7541L20.1695 11.5583L20.1872 11.7062C20.2601 12.3166 20.2601 12.9375 20.1851 13.551L20.1674 13.7L20.5882 14.5052L21.6091 15.0156L21.7247 15.326L20.9288 17.2458L20.6278 17.3833L19.5445 17.0229L18.6778 17.2948L18.5851 17.4125C18.2049 17.8989 17.7653 18.3385 17.282 18.7187L17.1643 18.8104L16.8924 19.677L17.2528 20.7593L17.1153 21.0604L15.1955 21.8562L14.8851 21.7406L14.3747 20.7208L13.5705 20.3L13.4226 20.3177C12.8132 20.3906 12.1924 20.3906 11.5768 20.3156L11.4288 20.2979L10.6236 20.7187L10.1132 21.7406L9.8028 21.8562L7.88301 21.0614L7.74551 20.7604L8.10592 19.677L7.83405 18.8104L7.71634 18.7177C7.22884 18.3354 6.78926 17.8968 6.41009 17.4135L6.31842 17.2958L5.4528 17.0239L4.37051 17.3854L4.06947 17.2479L3.27363 15.3281L3.38926 15.0177L4.27051 14.576L4.4278 14.4708L4.82988 13.702L4.81217 13.5541C4.73926 12.9437 4.73926 12.3229 4.81426 11.7093L4.83197 11.5604L4.41113 10.7552L3.3903 10.2448L3.27363 9.93433L4.06947 8.01454L4.37051 7.87704L5.45384 8.23746L6.32051 7.96558L6.41322 7.84788C6.79447 7.36038 7.23301 6.92183 7.71634 6.54163L7.83405 6.44892L8.10488 5.58225L7.74551 4.50204L7.88301 4.201L9.8028 3.40517L10.1132 3.52079L10.6236 4.54058L11.4278 4.96142L11.5757 4.94371C12.1861 4.87079 12.807 4.87079 13.4205 4.94579L13.5695 4.9635L14.3747 4.54163L14.8861 3.51975L15.1965 3.40413L17.1163 4.19996L17.2538 4.501L16.8934 5.58433L17.1643 6.451L17.282 6.54371C17.7684 6.92496 18.208 7.3635 18.5882 7.84788L18.6799 7.96558L19.5465 8.23746L20.6288 7.87704L20.9299 8.01454L21.7257 9.93433L21.6101 10.2448L20.5893 10.7541Z"
                fill="white"
              />
              <path
                d="M12.4941 7.28955C9.57331 7.28955 7.19727 9.66143 7.19727 12.5781C7.19727 15.4948 9.57331 17.8666 12.4941 17.8666C15.415 17.8666 17.791 15.4948 17.791 12.5781C17.791 9.66143 15.415 7.28955 12.4941 7.28955ZM12.4941 16.9041C10.1046 16.9041 8.16081 14.9635 8.16081 12.5781C8.16081 10.1927 10.1046 8.25205 12.4941 8.25205C14.8837 8.25205 16.8275 10.1927 16.8275 12.5781C16.8275 14.9635 14.8837 16.9041 12.4941 16.9041Z"
                fill="white"
              />
            </svg>
          </button>
          <Modal
            :common1="common1"
            :common2="common2"
            :common3="common3"
            :common4="common4"
            :common5="common5"
            @saveCommons="saveCommons"
            :isModalOpen="isModalOpen"
            @closeModal="isModalOpen = false"
          />

          <!-- <Modal :isModalOpen="isModalOpen" @closeModal="isModalOpen = false" /> -->
        </div>
      </div>
    </nav>
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>

    <div class="p-12 md:p-20 lg:p-16"></div>

    <div class="flex flex-col items-center bg-[#FEFAF7]">
      <span
        class="text-2xl font-bold pb-8 md:pb-10 lg:pb-12 md:text-4xl lg:text-4xl"
        >晚到證明填寫</span
      >

      <div
        class="flex justify-center items-center bg-white lg:w-96 lg:h-32 border border-[#EAEAEA] rounded-2xl"
      >
        <span class="text-center font-semibold text-4xl p-3 text-[#3D3D3D]"
          >31116 楊沁璇</span
        >
      </div>
      <div class="p-4"></div>
      <div class="flex flex-col gap-10 justify-center items-start px-10">
        <div class="flex flex-col lg:pl-4 pl-2">
          <span class="font-semibold text-left text-lg lg:text-xl"
            >晚到事由：</span
          >
          <div class="p-1"></div>
          <textarea
            v-model="lateReason"
            type="text"
            id="lateReason"
            name="lateReason"
            class="bg-[#fff] border border-black rounded-md lg:w-96 lg:h-32 lg:p-5"
            placeholder="Type here..."
          ></textarea>
        </div>
      </div>
      <div class="p-2"></div>
      <!-- common words -->
      <div>
        <div
          class="flex overflow-x-scroll justify-start items-center gap-3 w-72 px-3 lg:w-80 h-13 py-1"
        >
          <button
            class="bg-white px-3 py-2 border border-black rounded-full flex-none"
            @click="updateLateReason('執勤')"
          >
            執勤
          </button>
          <button
            class="bg-white px-3 py-2 border border-black rounded-full flex-none"
            @click="updateLateReason('在辦公室晤談')"
          >
            在辦公室晤談
          </button>
          <button
            class="bg-white px-3 py-2 border border-black rounded-full flex-none"
            @click="updateLateReason('討論作業')"
          >
            討論作業
          </button>
          <!-- <button
            class="bg-white px-3 py-2 border border-black rounded-full flex-none"
          >
            {{ common1 }}
          </button> -->
        </div>
      </div>

      <div class="p-5 md:p-6"></div>

      <div class="flex gap-3">
        <button class="cursor-pointer bg-[#FEFAF7]" @click="save">
          <div
            class="bg-[#363C56] text-white font-semibold rounded-md py-2 px-5 md:py-2 md:px-5 md:text-md"
          >
            送出
          </div>
        </button>
      </div>

      <div class="p-6"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const navigateToLateWrite = () => {
  router.push("/");
};

const updateLateReason = (reason) => {
  lateReason.value = reason;
};

const router = useRouter();
const goBack = () => {
  router.back();
};

const lateReason = ref("");

const save = () => {
  const userData = {
    lateReason: lateReason.value,
  };
  console.log("LateModalContent:", userData);

  router.push("/home");
};

import Modal from "../components/Modal.vue";

const isModalOpen = ref(false);
</script>

<style scoped></style>
