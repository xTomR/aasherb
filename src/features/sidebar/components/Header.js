import logo from "../../../common/assets/imgs/LogoAA.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 280px;
  height: 100px;
  align-items: center;

  margin-left: 56px;
  ${({ open }) => {
    if (!open) {
      return "opacity: 0";
    }
  }};

  & h1 {
    color: rgb(255, 255, 255);
    font-family: "Anton", sans-serif;
    font-size: 1.25rem;
  }
  & img {
    width: 80px;
    height: 80px;
    /* padding-top: 0.5rem; */
  }
`;

const Header = ({ open }) => {
  return (
    <StyledHeader open={open}>
      <h1>Le Groupe A&A</h1>
      <img src={logo} alt="" />
    </StyledHeader>
  );
};

export default Header;
