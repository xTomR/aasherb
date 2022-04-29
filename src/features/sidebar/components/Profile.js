import styled from "styled-components";
import Button from "../../../common/components/Button";

const ProfileCard = styled.div`
  font-family: "Poppins";
  text-align: center;
  color: white;
  width: auto;
  display: flex;
  justify-content: center;
  margin-left: 2.25rem;

  & span {
    padding: 0.25rem 1rem;
    font-size: 1rem;
  }

  & Button {
    font-weight: 700;
  }
`;

const Container = styled.div`
  width: 240px;
  height: fit-content;
  /* background-color: rgb(55, 65, 81, 0.8); */
  border-radius: 1rem;
  font-size: 0.875 rem;
  margin: auto;
`;

const Profile = (user, handleLogout) => {
  console.log(user);
  return (
    <>
      <Container>
        <ProfileCard>
          <div>
            <Button
              bgColor="#BC301C"
              text="Logout"
              onClick={() => handleLogout}
              width="fit-content"
            ></Button>
          </div>
        </ProfileCard>
      </Container>
    </>
  );
};

export default Profile;
