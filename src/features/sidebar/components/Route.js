import Button from "common/components/Button";
import { useState } from "react";
import styled from "styled-components";
import CodeQR from "./CodeQR";
import { FaHome, FaCarSide, FaStopCircle } from "react-icons/fa";

const Container = styled.div`
  font-family: "Poppins";
  position: absolute;
  width: 300px;
  height: fit-content;
  background-color: rgb(55, 65, 81, 0.8);
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  right: 24px;
  bottom: 0px;
  transition-property: all;
  transition-duration: 400ms;
  transform: translateX(-3rem);

  & header {
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 0.5rem;

    h1 {
      font-family: "Anton", sans-serif;
      font-size: 1.25rem;
    }
  }

  & main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & h2 {
      color: white;
      margin-left: 1rem;
      font-size: 0.75rem;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-left: 6px #027fbf solid;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;

  & h1 {
    padding-left: 0.5rem;
    color: #a7a6a6;
    font-size: 1rem;
  }
`;

const Route = ({
  setWaypoints,
  setWaypointName,
  dispatch,
  directions,
  googleMapLink,
  waypointNames,
}) => {
  const [showQR, setQR] = useState(false);
  const toggle = () => setQR(!showQR);
  const dir = () => {
    dispatch(setWaypoints([]));
    dispatch(setWaypointName([]));
  };

  return (
    <Container>
      <CodeQR googleMapLink={googleMapLink} />
      <header>
        <h1>Your Route</h1>
        <Button
          text="Reset"
          width="fit-content;"
          bgColor="#BC301C"
          handleOnClick={dir}
        ></Button>
      </header>
      <main>
        <StyledDiv>
          <FaHome />
          <h1>Groupe A&A</h1>
        </StyledDiv>
        <h2>↓</h2>
        {waypointNames.map((x, index) => {
          let name = x.name.toLowerCase();
          name = name.charAt(0).toUpperCase() + name.slice(1);
          return (
            <StyledDiv key={index}>
              <FaCarSide />
              <h1>{name.substring(0, 24) + "..."}</h1>
            </StyledDiv>
          );
        })}
        <h2>↓</h2>
        <StyledDiv>
          <FaStopCircle />
          <h1>
            {directions?.routes[0]?.legs[
              [directions?.routes[0]?.legs.length - 1]
            ].end_address.substring(0, 24) + "..."}
          </h1>
        </StyledDiv>
      </main>
      <footer></footer>
    </Container>
  );
};

export default Route;
