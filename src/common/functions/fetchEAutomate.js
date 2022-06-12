import axios from "axios";

const fetchEAutomate = async () => {
  const addresses = await axios
    .get(`https://apiaasherb.herokuapp.com/api/addresses`)
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.log(error);
      }
    );
  return addresses;
};

export default fetchEAutomate;
