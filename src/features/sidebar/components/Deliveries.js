import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 1rem 0 0 2.25rem;
  scrollbar-width: none;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Deliveries = ({ children }) => {
  return <Card>{children}</Card>;
};

export default Deliveries;
