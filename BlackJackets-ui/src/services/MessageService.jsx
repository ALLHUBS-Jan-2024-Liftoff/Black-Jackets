import axios from "axios";

const BASEAPIURL = "http://localhost:8090/message";
axios.defaults.withCredentials = true;

export const addMessage = async (message, venueId) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/add`, message, {
      params: { venueId: venueId },
    });
    return response.data;
  } catch (error) {
    alert("Error occurs while creating message!", error);
    throw error;
  }
};

export const fetchMessagesListByVenueId = async (venueId) => {
  try {
    const response = await axios.get(`${BASEAPIURL}/allMessages/${venueId}`);
    return response.data;
  } catch (error) {
    alert("Error occurs while fetching a messages from venue!", error);
    throw error;
  }
};
