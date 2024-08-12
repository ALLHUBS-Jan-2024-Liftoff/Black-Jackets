import axios from "axios";

const setAuthToken = token => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;

// const BASEAPIURL = "http://localhost:8090/auth";

// const api = axios.create({
//   BASEAPIURL: "/login",
// });

// // Add a request interceptor
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If the error status is 401 and there is no originalRequest._retry flag,
//     // it means the token has expired and we need to refresh it
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         const response = await axios.post("/auth/refresh-token", {
//           refreshToken,
//         });
//         const { token } = response.data;

//         localStorage.setItem("token", token);

//         // Retry the original request with the new token
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return axios(originalRequest);
//       } catch (error) {
//         // Handle refresh token error or redirect to login
//       }
//     }

//     return Promise.reject(error);
//   }
// );


