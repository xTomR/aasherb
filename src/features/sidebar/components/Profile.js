import styled from "styled-components";
import Button from "../../../common/components/Button";

const ProfileCard = styled.div`
  font-family: "Poppins";
  text-align: center;
  color: white;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-left: 1.75rem;

  & span {
    font-size: 1rem;
    padding-right: 0.5rem;
    align-self: center;
  }

  & Button {
    font-weight: 700;
  }
`;

const Container = styled.div`
  width: 310px;
  height: fit-content;
  border-radius: 1rem;
  font-size: 0.875 rem;
  margin: auto;
`;

const Profile = ({ user, handleLogout }) => {
  return (
    <>
      <Container>
        <ProfileCard>
          <span>{user.memoedValue.user.data.displayName}</span>
          <Button
            bgColor="#BC301C"
            text="Logout"
            handleOnClick={() => handleLogout()}
            width="fit-content"
          ></Button>
        </ProfileCard>
      </Container>
    </>
  );
};

export default Profile;
