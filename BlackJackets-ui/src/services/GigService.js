import axios from "axios";

const BASEAPIURL = "http://localhost:8090";

export const addGig = async (name, date, genre, ages, headliner, bandSlots) => {
    
    try {
        // let bodyFormData = new FormData();
        // bodyFormData.append();
        const response = await axios({
            method: 'post',
            url: `${BASEAPIURL}/gigs/add`,
            data: {
                name: name,
                date: date,
                genre: genre,
                ages: ages,
                headliner: headliner,
                bandSlots: bandSlots
            }
        });
        return response.data;
    } catch (error) {
        console.error("There was an error creating the Gig!", error);
        throw error;
    }
}