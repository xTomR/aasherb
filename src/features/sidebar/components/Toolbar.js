import React from "react";
import Button from "./ToolbarButton";
import styled from "styled-components";
import { FaRoute, FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const ToolbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30px;
  height: 100%;
  margin: 0 1rem 1rem 0.5rem;
  position: absolute;
`;

const Toolbar = ({
  route,
  profile,
  searchbar,
  dispatchProfile,
  dispatchRoute,
  children,
  dispatchSearchBar,
  user,
}) => {
  return (
    <ToolbarDiv>
      {children}
      <Button
        style={{ marginTop: "100px" }}
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
        style={{ marginTop: "auto" }}
        image={user.memoedValue.user.data.image}
        onClick={() => dispatchProfile()}
        toggle={profile}
      />
    </ToolbarDiv>
  );
};

export default Toolbar;
