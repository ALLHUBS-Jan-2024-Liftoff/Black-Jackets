import axios from "axios";

const BASEAPIURL = "http://localhost:8090";

export const login = async (username, password) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASEAPIURL}/login`,
      data: {
        usernamename: username,
        password: password
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error retrieving your account!", error);
    throw error;
  }
};
