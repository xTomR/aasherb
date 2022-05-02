import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ toggle }) => (toggle ? "white" : "#027FBF")};
  color: ${({ toggle }) => (toggle ? "#027FBF" : "white")};
  width: ${({ width }) => (width ? width : "32px")};
  height: ${({ height }) => (height ? height : "32px")};
  background-image: ${({ image }) => (image ? `url(${image})` : "none;")};
  background-size: cover;
  border: ${({ toggle, image }) =>
    toggle && image ? "2px solid white" : "none;"};
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

const ToolbarButton = ({
  icon,
  onClick,
  toggle,
  width,
  height,
  image,
  style,
}) => {
  return (
    <Button
      style={style}
      onClick={onClick}
      toggle={toggle}
      width={width}
      height={height}
      image={image}
    >
      {icon}
    </Button>
  );
};

export default ToolbarButton;
