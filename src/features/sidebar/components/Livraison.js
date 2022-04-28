import { forwardRef } from "react";
import styled from "styled-components";

const LivraisonContainer = styled.div`
  font-family: "Poppins";
  position: relative;
  background-image: ${({ activeMarker, delivery }) => {
    if (activeMarker === delivery.id)
      return "linear-gradient(to bottom, #027fbf, rgb(0, 0, 0, 0.2))";
  }};
  margin: 0 0.5rem 0 1.1rem;
  margin-bottom: 1.25rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  width: 280px;
  min-height: 130px;
  height: auto;
  background-color: rgb(0, 0, 0, 0.4);
  color: white;
  ${({ open }) => {
    if (!open) {
      return "opacity: 0";
    }
  }};
  & header {
    position: absolute;
    color: white;
    margin: auto;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: right;
    margin: 0.25rem 0.5rem 0.25rem 1rem;
    right: 0;
  }
  & h1 {
    text-align: left;
    padding: 1rem 0.75rem 8px 0.75rem;
    font-size: 1rem;
    line-height: 1.25rem;
    text-decoration-line: underline;
    text-underline-offset: 4px;
  }
  & li {
    display: grid;
  }
  & ul {
    text-align: left;
    padding: 0 0.75rem 0 0.75rem;
    color: #a7a6a6;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  & ul:last-child {
    position: absolute;
    padding-bottom: 0.25rem;
    bottom: 0;
    font-size: 11px;
    color: white;
  }
`;

const Livraison = (
  { delivery, activeMarker, dispatchActiveMarker, map, open },
  ref
) => {
  return (
    <>
      <LivraisonContainer
        ref={ref}
        open={open}
        activeMarker={activeMarker}
        delivery={delivery}
        className=""
        onClick={() => {
          dispatchActiveMarker(delivery.id);
          map.panTo(delivery.position);
          map.setZoom(13);
        }}
      >
        <header>{Number(delivery.id) + 1}</header>
        <h1>{delivery.name.substring(0, 24) + "..."}</h1>
        <li>
          <ul>{delivery.address}</ul>
          <ul>{delivery.postalCode}</ul>
          <ul>{delivery.date.substring(0, 10)}</ul>
        </li>
      </LivraisonContainer>
    </>
  );
};

export default forwardRef(Livraison);
