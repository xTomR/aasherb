import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../common/components/Loading";
import GoogleMapContainer from "features/googleMap/GoogleMapContainer";
import Sidebar from "../../features/sidebar/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const libraries = ["places"];
function Home() {
  const [error, setError] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [delivery, setDelivery] = useState([]);
  useEffect(() => {
    axios.get(`https://api.aasherb.com/api/deliveries`).then(
      (result) => {
        const realData = result.data.map((x) => {
          return x;
        });
        setDataLoaded(true);
        setDelivery(realData);
      },
      (error) => {
        setDataLoaded(true);
        setError(error);
      }
    );
  }, []);

  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_FRONTEND_KEY,
    libraries,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!dataLoaded) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <Wrapper>
          <GoogleMapContainer delivery={delivery} />'
          <Sidebar delivery={delivery} />
        </Wrapper>
      </>
    );
  }
}

export default Home;
