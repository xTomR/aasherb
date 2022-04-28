import styled from "styled-components";
import useToggle from "../hooks/useToggle";

const Button = styled.button`
  background-color: ${({ toggle }) => (toggle ? "white" : "#027FBF")};
  color: ${({ toggle }) => (toggle ? "#027FBF" : "white")};
  width: ${({ width }) => (width ? width : "32px")};
  height: ${({ height }) => (height ? height : "32px")};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-items: center;
  transition-property: all;
  transition-duration: 200ms;
  padding: 0.5rem;
  border: none;
`;

const PrimaryButton = ({ icon, width, height, activateToggle }) => {
  const [toggle, setToggle] = useToggle();

  if (activateToggle) {
    return (
      <Button onClick={setToggle} toggle={toggle} width={width} height={height}>
        {icon}
      </Button>
    );
  } else {
    return (
      <Button width={width} height={height}>
        {icon}
      </Button>
    );
  }
};

export default PrimaryButton;
