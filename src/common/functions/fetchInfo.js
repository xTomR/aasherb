import axios from "axios";

const fetchinfo = async () => {
  await axios.get(`https://apiaasherb.herokuapp.com/api/fetchinfo`).then();
};

export default fetchinfo;
// 1
