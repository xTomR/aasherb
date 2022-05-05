import { BsGoogle } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from "../assets/imgs/LogoAA.svg";
import styled from "styled-components";

const Card = styled.div`
  min-width: 320px;
  min-height: 300px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: transparent;
  box-shadow: 4px 4px 6px 4px rgb(0 0 0 / 0.1), 4px 2px 4px 4px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  justify-items: center;
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

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-content: start;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);

  & img {
    margin: 2rem auto;
    width: 150px;
    height: 150px;
    padding-bottom: 1rem;
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

const Title = styled.div`
  font-family: Anton;
  font-weight: 600;
  color: white;
  margin: auto;
  font-size: 5rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  letter-spacing: 5px;
`;

const LoginCard = ({ handleLogin, success, failure }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="" />
        <Title>Le Groupe A&A</Title>

        <Card>
          {/* <span>
            <h1>Le Groupe A&A</h1> 
             
          </span> */}

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
      </Container>
    </>
  );
};

export default LoginCard;
