import styled from "styled-components";
import QRCode from "qrcode.react";

const Container = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  background-color: rgb(55, 65, 81, 0.8);
  padding: 0.75rem;
  border-radius: 0.75rem;
  bottom: 0;
  right: 288px;
  transition-property: all;
  transition-duration: 400ms;
  transform: translateX(-3rem);

  & h1 {
    color: white;
    text-align: center;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
  }
`;

const CodeQR = ({ googleMapLink }) => {
  return (
    <Container>
      <h1>Google Map</h1>
      <QRCode
        value={googleMapLink}
        includeMargin={true}
        bgColor="white"
        fgColor="black"
        renderAs="svg"
      />
    </Container>
  );
};

export default CodeQR;
