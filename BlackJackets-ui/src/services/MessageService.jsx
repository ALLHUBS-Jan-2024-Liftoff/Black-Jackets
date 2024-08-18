import axios from "axios";

const BASEAPIURL = "http://localhost:8090/message";
axios.defaults.withCredentials = true;

export const addMessage = async (message) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/add`, message);
    return response.data;
  } catch (error) {
    alert("Error occurs while creating message!", error);
    throw error;
  }
};

export const fetchMessages = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}`);
    return response.data;
  } catch (error) {
    alert("Error occurs while fetching messages!", error);
    throw error;
  }
};