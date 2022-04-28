import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 360px;
  position: fixed;
  display: grid;
  margin-top: 2rem;
  background-color: rgb(55 65 81 /0.6);
  border-radius: 0.75rem;
  margin-left: auto;
  right: 10px;
  left: 0px;
  transition-property: all;
  transition-duration: 500ms;
  ${({ open, route }) => {
    if (open) {
      return "";
    } else if (!open) {
      return "width: 48px;";
    }
  }};
`;
const SidebarWrapper = ({ children, open, route }) => {
  return (
    <Container open={open} route={route}>
      {children}
    </Container>
  );
};

export default SidebarWrapper;
