import axios from "axios";

axios.defaults.withCredentials = true;
const key = "eb0fe5c6dc4d451e9c842dbd7fafb01f";
const apiUrl = "https://phonevalidation.abstractapi.com/v1";

export const validatePhone = async (phone) => {
    try {
        const response = await axios.get(`${apiUrl}?api_key=${key}&phone=${phone}`);
        return response.data;
    } catch (error) {
        console.log("Error validating phone", error);
        throw error;
    }
};
