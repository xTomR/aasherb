import "@reach/combobox/styles.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import styled from "styled-components";

const StyledComboboxList = styled(ComboboxList)`
  & ul {
    width: 300px;
  }
  & li:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  & li:first-child {
    /* border-top-left-radius: 1rem; */
  }
  & li:last-child:hover {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  & li:first-child:hover {
    /* border-top-left-radius: 1rem; */
  }
  & li {
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.2);
  }
  & li:hover {
    background: linear-gradient(
      0deg,
      rgba(2, 127, 191, 1) 100%,
      rgba(255, 255, 255, 0) 0%
    );
  }
`;

const StyledComboboxPopover = styled(ComboboxPopover)`
  font-family: "Poppins";
  z-index: 40;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;

const StyledCombobox = styled(Combobox)`
  font-family: "Poppins";
  position: absolute;
  height: 32px;
  top: 100px;
  right: 72px;
  display: flex;
  width: 324px;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  /* border-top-left-radius: 1rem;
  border-top-right-radius: 1rem; */
  transition-property: all;
  transition-duration: 400ms;
`;

const StyledComboboxInput = styled(ComboboxInput)`
  font-family: "Poppins";
  right: 20px;
  width: 100%;
  font-weight: 500;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  color: white;
  border-radius: 0.5rem;
  background-color: rgb(55 65 81 /0.8);

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &::placeholder {
    color: white;
  }
`;

const Searchbar = ({
  setCall,
  setWaypoints,
  map,
  open,
  setOpen,
  searchbar,
  dispatchSearchBar,
  dispatchRoute,
}) => {
  const {
    ready,
    value,
    setValue,
    clearSuggestions,
    suggestions: { status, data },
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: {
        country: ["ca"],
      },
    },
    googleMaps: map,
  });

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();
    dispatchSearchBar();
    dispatchRoute(true);
    setOpen(false);

    const results = await getGeocode({
      address: val,
    });
    const { lat, lng } = await getLatLng(results[0]);
    setWaypoints([]);
    setCall({ lat, lng });
  };
  if (searchbar) {
    return (
      <StyledCombobox onSelect={handleSelect} open={open}>
        <StyledComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search..."
          selectOnClick={true}
        ></StyledComboboxInput>

        <StyledComboboxPopover>
          <StyledComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption
                  key={place_id}
                  value={description}
                ></ComboboxOption>
              ))}
          </StyledComboboxList>
        </StyledComboboxPopover>
      </StyledCombobox>
    );
  } else {
    return null;
  }
};

export default Searchbar;
