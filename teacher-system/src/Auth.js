// firebase
//   .auth()
//   .currentUser.getIdToken(/* forceRefresh */ true)
//   .then(function (idToken) {
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${idToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     };

//     console.log("Sending request to the server...");
//     fetch(
//       "https://2a6a-2407-4d00-1c03-7e47-2062-a07b-a650-ebae.ngrok-free.app/auth/login",
//       requestOptions
//     )
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           console.error("Failed to send ID Token to the server.");
//           throw new Error("Failed to send ID Token to the server.");
//         }
//       })
//       .then((data) => {
//         console.log("Server response:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   })
//   .catch(function (error) {
//     console.error("Failed to get ID Token:", error);
//   });

// import axios from "axios";
// const idToken = "your_id_token_here";

// const requestData = {
//   idToken: idToken,
// };

// axios
//   .post(
//     "https://2a6a-2407-4d00-1c03-7e47-2062-a07b-a650-ebae.ngrok-free.app/auth/login",
//     requestData
//   )
//   .then((response) => {
//     const { userId, userEmail } = response.data;
//     console.log(
//       `Received data from the backend - userId: ${userId}, userEmail: ${userEmail}`
//     );
//   })
//   .catch((error) => {
//     console.error("Error sending request to the backend:", error);
//   });

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import axios from "axios";

// const auth = getAuth();

// // 使用 onAuthStateChanged 监听用户登录状态
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     try {
//       // 获取实际的 ID Token
//       const idToken = await user.getIdToken(/* forceRefresh */ true);

//       // 将 ID Token 添加到请求头
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${idToken}`,
//       };

//       // 构建请求数据
//       const requestData = {
//         idToken: idToken,
//       };

//       // 发送 POST 请求到后端
//       axios
//         .post(
//           "https://2a6a-2407-4d00-1c03-7e47-2062-a07b-a650-ebae.ngrok-free.app/auth/login",
//           requestData,
//           { headers }
//         )
//         .then((response) => {
//           // 处理后端返回的数据
//           const { userId, userEmail } = response.data;
//           console.log(
//             `Received data from the backend - userId: ${userId}, userEmail: ${userEmail}`
//           );
//         })
//         .catch((error) => {
//           console.error("Error sending request to the backend:", error);
//         });
//     } catch (error) {
//       console.error("Failed to get ID Token:", error);
//     }
//   } else {
//     // 用户未登录，处理未登录状态
//     console.log("User is not logged in.");
//   }
// });

import axios from "axios";

const idToken = "your_id_token_here";
const requestData = {
  idToken: idToken,
};

const headers = {
  "Content-Type": "application/json",

  // 'Authorization': `Bearer ${idToken}`,
};

axios
  .post(
    "https://2a6a-2407-4d00-1c03-7e47-2062-a07b-a650-ebae.ngrok-free.app/auth/login",
    requestData,
    { headers }
  )
  .then((response) => {
    const { userId, userEmail } = response.data;
    console.log(
      `Received data from the backend - userId: ${userId}, userEmail: ${userEmail}`
    );
  })
  .catch((error) => {
    console.error("Error sending request to the backend:", error);
  });
