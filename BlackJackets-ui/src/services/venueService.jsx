import axios from "axios";

const BASEAPIURL = "http://localhost:8090/venue";

// export const fetchVenues = async () => {
//     try {
//         const response = await axios.get(`${BASEAPIURL}`);
//         return response.data;
//     } catch (error) {
//         alert("Error occurs while fetching venues!", error);
//         throw error;
//     }
// };

export const addVenue = async (venue) => {
    try {
        const response = await axios.post(`${BASEAPIURL}/add`,venue);
        return response.data;
    } catch (error) {
        alert("Error occurs while creating venue!", error);
        throw error;
    }
};