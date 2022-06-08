import axios from "axios";

const fetchinfo = async () => {
  await axios.get(`${process.env.API_URL}api/fetchinfo`).then();
};

export default fetchinfo;
