import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from "../assets/imgs/LogoAA.svg";
import styled from "styled-components";
import bgImage from "../assets/imgs/bg-image.jpg";

const Background = styled.div`
  position: absolute;
  z-index: -10;
  background: rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    pointer-events: none;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 280px;
  margin: 2rem auto;
  /* padding-top: 3rem; */

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
  height: 90vh;
  width: 360px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  margin-top: 3rem;
  background-color: rgb(55 65 81 /0.7);
  border-radius: 0.75rem;
  margin-left: auto;
  right: 10px;
  left: 0px;

  & p {
    color: rgb(170, 170, 170);
    font-family: Poppins;
    font-size: 0.875rem;
    width: fit-content;
    margin: auto;
    text-decoration: underline;
  }

  & span {
    display: flex;
    justify-content: space-evenly;
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
    margin: 0;
    /* padding: 1rem 1rem 1rem 1rem; */
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

  &:hover {
    background-color: #aa2f1c;
  }

  &:active {
    transform: scale(0.95);
  }

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

        {success ? <h2>Success</h2> : <h2>Login</h2>}
        {success ? <h2>You will be redirected soon</h2> : null}
        {failure ? (
          <>
            <h1>Unauthorized</h1>
            <h2>Please login with different Google account</h2>
          </>
        ) : null}
        {handleLogin ? (
          <>
            <span>
              <GoogleButton onClick={handleLogin}>
                <IconContext.Provider value={{ className: "googleLogo" }}>
                  <BsGoogle />
                </IconContext.Provider>

                <div>Continue with Google</div>
              </GoogleButton>
            </span>
            <div>
              <p
                onClick={() =>
                  (window.location =
                    "mailto:troy@groupeaa.com?subject=Request access to AASherb&body=Hi, I would like to have access to AASherb")
                }
              >
                Request access to AASherb
              </p>
            </div>
          </>
        ) : null}
      </Card>
    </>
  );
};

export default LoginCard;
