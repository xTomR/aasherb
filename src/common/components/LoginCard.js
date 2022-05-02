import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from "../assets/imgs/LogoAA.svg";
import styled from "styled-components";
import bg from "./test.png";

const Card = styled.div`
  min-width: 360px;
  min-height: 200px;
  margin: 0 auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: rgb(55, 65, 81, 0.3);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  justify-items: center;

  & h1 {
    font-family: "Anton", sans-serif;
    font-size: 1.25rem;
    color: white;
    padding: 0 1rem 5rem 1rem;
    align-self: center;
  }
  & h2 {
    color: white;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
    margin: auto;
    padding: 0 1rem 5rem 1rem;
  }

  & img {
    margin: auto;
    height: fit-content;
    width: fit-content;
    padding: 1rem;
  }
  & Button {
    margin: auto auto 20px auto;
    grid-column-start: 1;
    grid-column-end: span col2-start;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-content: center;
  background-color: rgb(0, 0, 0, 0.9);

  /* background-image: linear-gradient(
    to right bottom,
    #312d8e,
    #092d79,
    #002962,
    #00234a,
    #041c31,
    #051c27,
    #0e1b1e,
    #171818,
    #1c1d1d,
    #212222,
    #262727,
    #2b2c2c
  ); */
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0 auto 0 auto;
  border-radius: 0.5rem;
  background-color: #bc301c;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: "Poppins", sans-serif;

  .googleLogo {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const LoginCard = ({ handleLogin, success, failure }) => {
  return (
    <>
      <Container>
        <Card>
          <h1>Le Groupe A&A</h1>
          <img src={logo} alt="" />
          {success ? <h1>You will be redirected soon</h1> : null}
          {failure ? (
            <>
              <h1>Unauthorized</h1>
              <h2>Please login with different Google account</h2>
            </>
          ) : null}
          {handleLogin ? (
            <GoogleButton onClick={handleLogin}>
              {" "}
              <IconContext.Provider value={{ className: "googleLogo" }}>
                <BsGoogle />
              </IconContext.Provider>
              <span>Sign in with Google</span>
            </GoogleButton>
          ) : null}
        </Card>
      </Container>
    </>
  );
};

export default LoginCard;
