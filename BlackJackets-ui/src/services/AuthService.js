// import axios from "axios";

// const BASEAPIURL = "http://localhost:8090/user";

// const register = async (email, password, fullName) => {
//   try {
//     const response = await axios.post(
//       `${BASEAPIURL}/register`,
//       {
//         email,
//         password,
//         fullName,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("There was an error creating your account!", error);
//     throw error;
//   }
// };

// const login = async (email, password) => {
//   try {
//     const response = await axios.post(
//       `${BASEAPIURL}/login`,
//       {
//         email,
//         password,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("There was an error creating your account!", error);
//     throw error;
//   }
// };

// const authService = {
//   register,
//   login,
//   // logout,
// };

// export default authService;