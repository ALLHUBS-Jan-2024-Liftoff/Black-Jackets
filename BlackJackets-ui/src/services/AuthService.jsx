import axios from "axios";

const BASEAPIURL = "http://localhost:8090";

const register = (username, email, password) => {
  return axios
    .post(`${BASEAPIURL}/register`, {
      username,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(`${BASEAPIURL}/login`, {
      username, 
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
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
