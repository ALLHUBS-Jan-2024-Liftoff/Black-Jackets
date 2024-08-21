import axios from "axios";

const BASEAPIURL = "http://localhost:8090/user";
axios.defaults.withCredentials = true;

export const fetchUser = async (user) => {
    const apiUrl = `${BASEAPIURL}/${user.id}`;
  try {
     const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
};
