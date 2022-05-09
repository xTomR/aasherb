import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from "../assets/imgs/LogoAA.svg";
import styled from "styled-components";
import bgImage from "../assets/imgs/bg-image.jpg";

const Background = styled.div`
  position: absolute;
  z-index: -10;
  background: rgba(0, 0, 0, 0.75);
  background-blend-mode: darken;
  background-image: url(${bgImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px); /* apply the blur */
    pointer-events: none; /* make the overlay click-through */
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 280px;
  height: 100px;
  align-items: center;

  margin: auto;

  & h5 {
    color: rgb(255, 255, 255);
    font-family: "Anton", sans-serif;
    font-size: 1.25rem;
  }
  & img {
    width: 80px;
    height: 80px;
  }
`;

const Card = styled.div`
  grid-template-rows: 100px auto 55px;
  height: 90vh;
  width: 360px;
  position: fixed;
  /* display: grid; */
  margin-top: 2rem;
  background-color: rgb(55 65 81 /0.3);
  border-radius: 0.75rem;
  margin-left: auto;
  right: 10px;
  left: 0px;
  /* border-left: 10px #017dc3 solid; */

  & p {
    margin: 0 auto;
    padding-bottom: 1rem;
    color: rgb(170, 170, 170);
    font-family: Poppins;
    font-size: 0.875rem;
  }

  & span {
    display: flex;
    justify-content: space-evenly;
    width: 280px;
    height: 100px;
    align-items: center;
    margin: 0 auto;
  }

  & h1 {
    color: rgb(255, 255, 255);
    font-family: "Anton", sans-serif;
    font-size: 1.25rem;
  }

  & h2 {
    color: white;
    font-family: "Anton", sans-serif;
    font-size: 1.875rem;
    text-align: center;
    margin: auto;
    padding: 2rem 1rem 1rem 1rem;
  }

  & Button {
    margin: auto;
    box-shadow: 4px 4px 6px -2px rgb(0 0 0 / 0.1),
      4px 2px 4px -1px rgb(0 0 0 / 0.1);
  }
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
      <Background></Background>
      <Card>
        <StyledHeader>
          <h5>Le Groupe A&A</h5>
          <img src={logo} alt="" />
        </StyledHeader>
        <div>
          {success ? <h2>Success</h2> : <h2>Login</h2>}

          {success ? <h2>You will be redirected soon</h2> : null}
          {failure ? (
            <>
              <h1>Unauthorized</h1>
              <h2>Please login with different Google account</h2>
            </>
          ) : null}
        </div>
        {handleLogin ? (
          <>
            <span>
              <GoogleButton onClick={handleLogin}>
                {" "}
                <IconContext.Provider value={{ className: "googleLogo" }}>
                  <BsGoogle />
                </IconContext.Provider>
                <div>Continue with Google</div>
              </GoogleButton>
            </span>
            <p>Not able to log in with google ?</p>
          </>
        ) : null}
      </Card>
    </>
  );
};

export default LoginCard;
