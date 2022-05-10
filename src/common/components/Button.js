import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#027FBF")};
  color: ${({ color }) => (color ? color : "white")};
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

  &:hover {
    background-color: #aa2f1c;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Button = ({
  bgColor,
  color,
  icon,
  width,
  height,
  handleOnClick,
  text,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      onClick={handleOnClick}
      width={width}
      height={height}
    >
      {icon ? icon : text}
    </StyledButton>
  );
};

export default Button;
