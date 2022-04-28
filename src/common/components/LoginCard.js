import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from "../assets/imgs/LogoAA.svg";
import styled from "styled-components";

const Card = styled.div`
  min-width: 300px;
  min-height: 400px;
  margin: 0 auto 0 auto;
  display: grid;
  align-content: space-around;
  align-items: center;
  background-color: rgb(55, 65, 81, 0.3);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  justify-content: space-evenly;

  & h1 {
    color: white;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
    margin: auto;
    padding: 0 1rem 5rem 1rem;
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
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-content: center;
  background-image: linear-gradient(
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
  );
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
          <img src={logo} alt="" />
          <h1>Le Groupe A&A</h1>
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
