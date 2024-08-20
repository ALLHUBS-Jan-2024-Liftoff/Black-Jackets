import axios from "axios";

const BASEAPIURL = "http://localhost:8090";
axios.defaults.withCredentials = true;

export const genreList = [
  "Rock",
  "Rap",
  "Hip-Hop",
  "Jazz",
  "Country",
  "Blues",
  "Metal",
];

export const agesList = ["All Ages", "Ages 21+"];

export const parseDate = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toLocaleDateString();
  const formattedTime = dateObject.toLocaleTimeString("en",{timeStyle:"short"});

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const fetchGigs = async (isVenue, venueId) => {
  const apiUrl = isVenue
    ? `${BASEAPIURL}/gigs/list/${venueId}`
    : `${BASEAPIURL}/gigs/list/all`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
};

export const fetchGig = async (gigId) => {
  const apiUrl = `${BASEAPIURL}/gigs/${gigId}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
};

export const addGig = async (
  name,
  date,
  genre,
  ages,
  headliner,
  bandSlots,
  supportingAct,
  openingAct,
  venueId
) => {
  const userData = {
    name: name,
    date: date,
    genre: genre,
    ages: ages,
    headliner: headliner,
    bandSlots: bandSlots,
    supportingAct: supportingAct,
    openingAct: openingAct,
  };

  axios
    .post(`${BASEAPIURL}/gigs/add`, userData, { params: { venueId: venueId } })
    .then((response) => {
      console.log(response.status, response.data.token);
    });
};

export const deleteGig = async (gigId) => {
  try {
    await axios.delete(`${BASEAPIURL}/gigs/${gigId}`);
  } catch (error) {
    console.error("There was an error deleting the gig!", error);
    throw error;
  }
};
