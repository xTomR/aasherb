import axios from "axios";

const fetchAddresses = async () => {
  const addresses = await axios.get("http://localhost:5000/api/addresses").then(
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