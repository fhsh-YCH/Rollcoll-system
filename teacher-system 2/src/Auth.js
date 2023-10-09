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
//       "https://8176-2407-4d00-1c03-7e47-e131-9c-9ea2-ce93.ngrok-free.app/auth/login",
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

import axios from "axios";
const idToken = "your_id_token_here";

const requestData = {
  idToken: idToken,
};

axios
  .post(
    "https://8176-2407-4d00-1c03-7e47-e131-9c-9ea2-ce93.ngrok-free.app/auth/login",
    requestData
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
