<template>
  <div class="bg-[#FEFAF7]">
    <div
      v-for="(curriculum, index) in Json.curriculums"
      :key="curriculum.id"
      class="flex justify-center items-center mb-3"
    >
      <div
        class="bg-[#4B526D] text-white rounded-md px-5 py-1 border border-[#4B526D] text-center"
      >
        <span>第<br />{{ curriculum.session }}<br />節</span>
      </div>
      <div
        :class="{ blink: isTimeInRange(index + 1) }"
        class="border border-[#4B526D] rounded-md text-[#4B526D] font-bold text-2xl bg-white"
      >
        <button
          class="w-60 h-20 text-center"
          @click="
            curriculum.class === '    ' || !curriculum.class
              ? NoClass()
              : navigateToName(curriculum.id)
          "
        >
          <span>{{
            curriculum.class === "    " || !curriculum.class
              ? "沒課！"
              : curriculum.class + " " + curriculum.session_name
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Json from "../mark/curriculums.json";

const fakeData = ref([]);

onMounted(async () => {
  try {
    // const response = await axios.get("../mark/data.json");
    // fakeData.value = response.data;
    fakeData.value = Json;
  } catch (error) {
    console.error("Error loading JSON data", error);
  }
});

// onMounted(async () => {
//   try {
//     fakeData.value = json;
//   } catch (error) {
//     console.error("Error loading JSON data", error);
//   }
// });

const navigateToName = (curriculum) => {
  router.push({
    path: "/name",
    query: { sessionName: curriculum.session_name },
  });
};

import { useRouter } from "vue-router";

const router = useRouter();

const isTimeInRange = (index) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  switch (index) {
    case 1:
      return currentHour === 8 && currentMinute >= 0 && currentMinute <= 59;
    case 2:
      return currentHour === 9 && currentMinute >= 0 && currentMinute <= 59;
    case 3:
      return currentHour === 10 && currentMinute >= 0 && currentMinute <= 59;
    case 4:
      return currentHour === 11 && currentMinute >= 0 && currentMinute <= 59;
    case 5:
      return (
        (currentHour === 12 && currentMinute >= 50 && currentMinute <= 59) ||
        (currentHour === 13 && currentMinute >= 0 && currentMinute <= 49)
      );

    case 6:
      return (
        (currentHour === 13 && currentMinute >= 50 && currentMinute <= 59) ||
        (currentHour === 14 && currentMinute >= 0 && currentMinute <= 49)
      );
    case 7:
      return (
        (currentHour === 14 && currentMinute >= 50 && currentMinute <= 59) ||
        (currentHour === 15 && currentMinute >= 0 && currentMinute <= 59)
      );
    case 8:
      return currentHour === 16 && currentMinute >= 10 && currentMinute <= 59;
    case 9:
      return currentHour === 17 && currentMinute >= 10 && currentMinute <= 59;
    default:
      return false;
  }
};
const NoClass = async () => {
  alert("太好了～這節沒課！");
};
</script>
<style scoped>
.blink {
  animation: blink 2s infinite;
}

@keyframes blink {
  0% {
    background-color: #b19f91;
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: #b19f91;
  }
}
</style>
