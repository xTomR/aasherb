import styled from "styled-components";
import Button from "../../../common/components/Button";

const ProfileCard = styled.div`
  font-family: "Poppins";
  text-align: center;
  color: white;
  width: auto;
  display: flex;
  justify-content: start;

  & span {
    padding: 0.25rem 1rem;
    font-size: 1rem;
  }

  & Button {
    position: absolute;
    right: 0;
    font-weight: 700;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: fit-content;
  background-color: rgb(55, 65, 81, 0.8);
  border-radius: 1rem;
  right: 0;
  top: 88px;
  transition-property: all;
  transition-duration: 400ms;
  transform: translateX(-3rem);
  font-size: 0.875 rem;
`;

const Profile = (user, handleLogout) => {
  return (
    <>
      <Container>
        <ProfileCard>
          <span>Logged in as {user.user.memoedValue.user.data.firstName}</span>
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
