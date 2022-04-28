import React from "react";
import Button from "./ToolbarButton";
import styled from "styled-components";
import { FaRoute, FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const ToolbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  margin: 0.75rem 1rem 1rem 0.5rem;
  position: absolute;
  top: 100px;
`;

const Toolbar = ({
  route,
  profile,
  searchbar,
  dispatchProfile,
  dispatchRoute,
  children,
  dispatchSearchBar,
}) => {
  return (
    <ToolbarDiv>
      {children}
      <Button
        icon={<FaSearch />}
        onClick={() => dispatchSearchBar()}
        toggle={searchbar}
      />
      <Button
        icon={<FaRoute />}
        onClick={() => dispatchRoute()}
        toggle={route}
      />
      <Button
        icon={<BsPersonFill />}
        onClick={() => dispatchProfile()}
        toggle={profile}
      />
    </ToolbarDiv>
  );
};

export default Toolbar;
