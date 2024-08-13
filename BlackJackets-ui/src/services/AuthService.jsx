import axios from "axios";
import api from "../services/TokenService"; 

const BASEAPIURL = "http://localhost:8090/auth";


const register = async (email, password, fullName) => {
  const response = await axios
    .post(`${BASEAPIURL}/register`, {
      email,
      password,
      fullName
    });
  const token = response.data.token;
  //set JWT token to local
  localStorage.setItem("token", token);
  //set token to axios common header
  api(token);
  return response.data;
};

const login = async (email, password) => {
  const response = await axios
    .post(`${BASEAPIURL}/login`, {
      email,
      password,
    });
  //get token from response
  const token = response.data.token;
  //set JWT token to local
  localStorage.setItem("token", token);
  //set token to axios common header
  api(token);
  return response.data;
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService; 

// export const register = async (username, email, password) => {
//     const userData = 
//       {
//         username: username,
//         email: email,
//         password: password
//       };

//       axios
//     .post(`${BASEAPIURL}/auth/register`, userData)
//     .then((response) => {
//       console.log(response.status, response.data.token);
//     });

  //   return response.data;
  //      alert("Account created!");
  //      window.location.href = "/login";
  // } catch (error) {
  //   console.error("There was an error creating your account!", error);
  //   throw error;
  // }
// };
