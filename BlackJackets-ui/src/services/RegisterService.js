import axios from "axios";

const BASEAPIURL = "http://localhost:8090";

export const register = async (name, email, password) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASEAPIURL}/register`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error creating your account!", error);
    throw error;
  }
};
