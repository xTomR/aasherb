import axios from "axios";

const fetchinfo = async () => {
  await axios.get(`${process.env.API_URL}api/fetchinfo`).then();

  const fetchAddresses = async () => {
    const addresses = await axios
      .get(`${process.env.API_URL}api/addresses`)
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
};

export default fetchinfo;
