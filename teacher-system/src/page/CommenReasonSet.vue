<template>
  <div class="h-screen bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <button @click="home" class="text-left">
          <span
            class="text-white text-sm font-semibold tracking-wide lg:text-lg"
            >復興高中<br />智慧出缺勤系統</span
          >
        </button>
      </div>
    </nav>
    <button
      class="text-2xl fixed left-6 top-24 text-center md:text-3xl lg:text-4xl lg:left-8 lg:top-28"
      @click="goBack"
    >
      ←
    </button>

    <div class="p-20 md:p-20 lg:p-16"></div>

    <div class="flex justify-center items-center">
      <div
        class="bg-white border border-[#3d3d3d] rounded-lg w-3/4 lg:w-1/3 py-5 lg:py-8 flex flex-col justify-center items-center"
      >
        <span class="font-semibold text-xl p-1 lg:text-3xl"
          >常用晚到事由設定</span
        >
        <div class="p-3"></div>
        <div class="flex flex-col gap-6">
          <div>
            <span class="font-semibold text-lg pr-2 lg:pr-3 lg:text-xl"
              >常用1</span
            ><input
              type="text"
              id="note1"
              name="note1"
              class="bg-[#e2e2e2] py-1 rounded-md text-center lg:py-2 lg:px-5"
              placeholder="Type here..."
              v-model="note1"
            />
          </div>
          <!-- <div>
            <span class="font-semibold text-lg pr-2">常用2</span
            ><input
              type="text"
              id="note2"
              name="note2"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用3</span
            ><input
              type="text"
              id="note3"
              name="note3"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用4</span
            ><input
              type="text"
              id="note4"
              name="note4"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div>
          <div>
            <span class="font-semibold text-lg pr-2">常用5</span
            ><input
              type="text"
              id="note5"
              name="note5"
              class="bg-[#e2e2e2] py-1 rounded-md text-center"
              placeholder="Type here..."
            />
          </div> -->
        </div>

        <div class="p-4"></div>
        <button @click="saveNotes" class="cursor-pointer">
          <div
            class="bg-[#3D3D3D] text-white text-sm rounded-lg text-center font-semibold px-4 py-2 md:py-2 md:px-5 md:text-lg"
          >
            確定
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const note1 = ref("");
const router = useRouter();
const access_token = ref("");

onMounted(() => {
  access_token.value = localStorage.getItem("access_token");
});

const saveNotes = async () => {
  try {
    if (!access_token.value) {
      console.error("Access token is missing.");
      return;
    }

    const requestData = {
      new_clpd: note1.value,
    };

    const response = await axios.post(
      "https://rollcall-api.fhh4ck3rs.taipei/user/clpd",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": access_token.value,
        },
      }
    );
    localStorage.setItem("晚到單常用事由", note1.value);
    console.log(response.data);

    router.push("/latewrite");
  } catch (error) {
    console.error("Error saving notes:", error.response.data);
  }
};
const home = () => {
  router.push("/home");
};
const goBack = () => {
  router.back();
};
</script>
