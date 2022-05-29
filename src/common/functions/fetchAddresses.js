import axios from "axios";

const fetchinfo = async () => {
  await axios.get(`https://api.aasherb.com/api/fetchinfo`).then();
};

export default fetchinfo;
