import React from "react";
import MapContainer from "./MapContainer";
import styled from "styled-components";
import bikeLogo from "assets/scooter.png";

const Wrapper = styled.div`
  width: ${props => props.mapWidth};
  height: ${props => props.mapHeight};
`;

export default function Map(props) {
  return (
    <Wrapper {...props}>
      <MapContainer {...props} />
    </Wrapper>
  );
}

Map.defaultProps = {
  mapWidth: "500px",
  mapHeight: "500px",
  entries: [
    {
      id: 1,
      name: "Vehicle1 shihab was testing",
      infoBox: wrapperStyle => <div style={wrapperStyle}>Custom info 1</div>,
      longitude: 77.59695053100585,
      latitude: 12.968761817617018,
      isInfoBoxOpen: false,
      icon: bikeLogo
    },
    {
      id: 2,
      infoBox: wrapperStyle => <div style={wrapperStyle}>Demo</div>,
      longitude: 77.5663948059082,
      latitude: 12.96457971408171,
      isInfoBoxOpen: false
    },
    {
      id: 3,
      name: "Vehicle3",
      longitude: 77.62767791748047,
      latitude: 12.977293090826695,
      isInfoBoxOpen: false
    }
  ],
  onMarkerClick: () => {},
  headingColor: "#4a377b",
  tableName: "Demo",
  labelStyle: {
    backgroundColor: "#4d5087",
    fontSize: "12px",
    color: "#ffffff",
    padding: "2px 4px",
    borderRadius: "4px"
  },
  infoBoxWrapperStyle: {
    backgroundColor: "white",
    color: "#4a377b",
    opacity: "0.75",
    padding: "2px 4px",
    borderRadius: "4px"
  },
  defaultZoom: 12,
  defaultCenter: { lat: 12.991009426122396, lng: 77.59437561035156 }
};
