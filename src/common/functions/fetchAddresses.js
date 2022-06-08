import axios from "axios";

<<<<<<< Updated upstream
const fetchinfo = async () => {
  await axios.get(`https://api.aasherb.com/api/fetchinfo`).then();
=======
<<<<<<< HEAD
const fetchAddresses = async () => {
  const addresses = await axios.get(`${process.env.API_URL}api/addresses`).then(
    (result) => {
      return result;
    },
    (error) => {
      console.log(error);
    }
  );
  return addresses;
=======
const fetchinfo = async () => {
  await axios.get(`https://api.aasherb.com/api/fetchinfo`).then();
>>>>>>> 4b8e4bb881fc7bb3a723e575b373c892d7a18a30
>>>>>>> Stashed changes
};

export default fetchinfo;
