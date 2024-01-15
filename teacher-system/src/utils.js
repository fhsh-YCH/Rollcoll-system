// import axios from "axios";
// import { reactive, ref } from "vue";

// export const datas = reactive({
//   ready: false,
// });

// export const data_arrive_model_control = reactive({
//   is_open: true,
// });

// export const req = async () => {
//   const response = await axios.post(
//     "https://server-api.fhh4ck3rs.taipei/auth/login"
//   );
//   response.data.items.map((item) => {
//     if (!datas[item.category]) {
//       datas[item.category] = [];
//     }
//     datas[item.category].push(item);
//   });
//   data_arrive_model_control.is_open = false;
//   datas.ready = true;
// };

// utils.js

export function getSessionName(sessionIndex, currentHour, currentMinute) {
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
  }
}
