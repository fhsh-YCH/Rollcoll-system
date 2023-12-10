<template>
  <div class="h-full bg-[#FEFAF7]">
    <nav
      class="bg-[#363C56] py-3 pl-6 w-screen fixed left-0 right-0 top-0 z-20 lg:py-4 lg:pl-10"
    >
      <div class="flex items-center">
        <span class="text-white text-sm font-semibold tracking-wide lg:text-lg">
          復興高中<br />智慧出缺勤系統
        </span>
        <div class="pl-24 flex absolute right-5">
          <span class="text-white text-right text-xs tracking-wider lg:text-md">
            {{ formattedDate }} {{ getSessionName(1) }}
          </span>
          <span
            class="text-white text-right text-xs tracking-wider pl-1 lg:text-md"
          >
            {{ sessionName }}
          </span>
        </div>
      </div>
    </nav>
    <button
      class="text-2xl fixed left-4 top-20 text-center lg:top-28 lg:text-4xl lg:left-8"
      @click="goBack"
    >
      ←
    </button>
    <div class="p-10 lg:p-16 md:p-12"></div>
    <div class="md:flex md:justify-center md:items-center">
      <div
        class="flex flex-col justify-center items-center gap-2 md:w-4/5 lg:grid-cols-3 lg:w-11/12 lg:ml-8 md:grid-cols-2 md:grid md:gap-3 md:pl-6 lg:gap-3"
      >
        <Student ref="studentComponent" />
      </div>
    </div>

    <div class="flex justify-center items-center p-8 bg-[#FEFAF7]">
      <button @click="submitAttendance">
        <div class="bg-[#3D3D3D] text-white font-semibold rounded-md py-2 px-5">
          送出
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import Student from "../components/Student.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
let currentHour = new Date().getHours();
let currentMinute = new Date().getMinutes();
const formattedDate = ref("");
const route = useRoute();
const sessionName = route.query.sessionName;

const formatDate = (date) => {
  const options = {
    weekday: "long",
  };

  const formatted = new Intl.DateTimeFormat("default", options).format(
    new Date(date)
  );

  return formatted;
};

onMounted(() => {
  const currentDate = new Date();
  formattedDate.value = formatDate(currentDate);
});

const getSessionName = (sessionIndex) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (sessionIndex === 1) {
    if (currentHour === 8 && currentMinute >= 0 && currentMinute <= 59) {
      return "節次一";
    }
  } else if (sessionIndex === 2) {
    if (currentHour === 9 && currentMinute >= 0 && currentMinute <= 59) {
      return "節次二";
    }
  } else if (sessionIndex === 3) {
    if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 59) {
      return "節次三";
    }
  } else if (sessionIndex === 4) {
    if (currentHour === 11 && currentMinute >= 0 && currentMinute <= 59) {
      return "節次四";
    }
  } else if (sessionIndex === 5) {
    if (
      (currentHour === 12 && currentMinute >= 50 && currentMinute <= 59) ||
      (currentHour === 13 && currentMinute >= 0 && currentMinute <= 49)
    ) {
      return "節次五";
    }
  } else if (sessionIndex === 6) {
    if (
      (currentHour === 13 && currentMinute >= 50 && currentMinute <= 59) ||
      (currentHour === 14 && currentMinute >= 0 && currentMinute <= 49)
    ) {
      return "節次六";
    }
  } else if (sessionIndex === 7) {
    if (
      (currentHour === 14 && currentMinute >= 50 && currentMinute <= 59) ||
      (currentHour === 15 && currentMinute >= 0 && currentMinute <= 59)
    ) {
      return "節次七";
    }
  }

  return "非上課時段";
};
const router = useRouter();
const goBack = () => {
  router.back();
};

const fakeData = ref([]);

const submitAttendance = () => {
  if (fakeData.value && fakeData.value.students) {
    fakeData.value.students.forEach((student) => {
      const status = student.status || "準時";
      console.log(
        `${student.class}${student.seatnumber} ${student.name} - 狀態: ${status}`
      );
    });
  } else {
    console.log(" ");
  }
  router.push("/home");
};
</script>
