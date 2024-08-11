import axios from "axios";

const BASEAPIURL = "http://localhost:8090";

export const genreList = ["Rock", "Rap", "Hip-Hop", "Jazz", "Country", "Blues", "Metal"]; 

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
  //   const headers = {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": `${BASEAPIURL}/gigs/add`
  //   }

  axios
    .post(`${BASEAPIURL}/gigs/add`, userData, { params: { venueId: venueId } })
    .then((response) => {
      console.log(response.status, response.data.token);
    });

  // let data = JSON.stringify({
  //   "name": "Big Show",
  //   "date": "2028-06-12T19:30",
  //   "genre": "Rock",
  //   "ages": "21+",
  //   "headliner": "OREO Speedwagon",
  //   "bandSlots": 3
  // });

  // let config = {
  //   method: 'post',
  //   maxBodyLength: Infinity,
  //   url: 'http://localhost:8090/gigs/add',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data : data
  // };

  // axios.request(config)
  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  // // Third attempt base
  //   let formData = JSON.stringify({
  //     "name": name,
  //     "date": date,
  //     "genre": genre,
  //     "ages": ages,
  //     "headliner": headliner,
  //     "bandSlots": bandSlots,
  //   });

  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: `${BASEAPIURL}/gigs/add`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: formData,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // // First attempt base
  //   try {
  //       // let bodyFormData = new FormData();
  //       // bodyFormData.append();
  //       const response = await axios({
  //           method: 'post',
  //           url: `${BASEAPIURL}/gigs/add`,
  //           data: {
  //               name: name,
  //               date: date,
  //               genre: genre,
  //               ages: ages,
  //               headliner: headliner,
  //               bandSlots: bandSlots
  //           }
  //       });
  //       return response.data;
  //   } catch (error) {
  //       console.error("There was an error creating the Gig!", error);
  //       throw error;
  //   }

  // // Second attempt base
  //   try {
  //     const response = await axios.post("http://localhost:8090/gigs/add", JSON.stringify({
  //       name: name,
  //       date: date,
  //       genre: genre,
  //       ages: ages,
  //       headliner: headliner,
  //       bandSlots: bandSlots,
  //     }));
  //     return response.data;
  //   } catch (error) {
  //     console.error("There was an error creating gig!", error);
  //     throw error;
  //   }
};
