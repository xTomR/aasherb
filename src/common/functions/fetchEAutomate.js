import axios from "axios";

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
};

export default fetchAddresses;
