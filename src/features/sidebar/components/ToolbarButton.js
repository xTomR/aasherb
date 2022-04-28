import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ toggle }) => (toggle ? "white" : "#027FBF")};
  color: ${({ toggle }) => (toggle ? "#027FBF" : "white")};
  width: ${({ width }) => (width ? width : "32px")};
  height: ${({ height }) => (height ? height : "32px")};
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
  justify-items: center;
  transition-property: all;
  transition-duration: 200ms;

  & :only-child {
    margin: auto;
    border: none;
  }
`;

const ToolbarButton = ({ icon, onClick, toggle, width, height }) => {
  return (
    <Button onClick={onClick} toggle={toggle} width={width} height={height}>
      {icon}
    </Button>
  );
};

export default ToolbarButton;
