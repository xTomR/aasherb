import React from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  position: absolute;
  left: -1.5rem;
  top: 50vh;
  text-align: center;
  background-color: white;
  color: black;
  ${({ open }) => {
    if (!open) {
      return "background-color: rgb(55, 65, 81); color: white";
    } else {
    }
  }};
`;

const Minimize = ({ open, setOpen }) => {
  if (open) {
    return (
      <StyledButton open={open} onClick={() => setOpen(!open)}>
        <TiArrowRightThick />
      </StyledButton>
    );
  } else
    return (
      <StyledButton open={open} onClick={() => setOpen(!open)}>
        <TiArrowLeftThick />
      </StyledButton>
    );
};

export default Minimize;
