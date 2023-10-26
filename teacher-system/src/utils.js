// fetch(
//   "https://8176-2407-4d00-1c03-7e47-e131-9c-9ea2-ce93.ngrok-free.app/auth/login",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//
//     },
//     body: JSON.stringify({
//
//     }),
//   }
// )
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Failed to send request to the server.");
//     }
//   })
//   .then((data) => {
//
//     console.log("Server response:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

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
