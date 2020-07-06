/* global google */

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon,
  Polyline,
  Marker,
  withHandlers
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import { InfoWindow } from "react-google-maps";
import styled from "styled-components";
import PropTypes from "prop-types";
import { places, coords, polyLineCoords } from "./mapUtilities";
// import { MAP_KEY } from "../../common";

import _ from "lodash";

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`,
    loadingElement: (
      <div style={{ height: `100%`, width: "100%" }}>Loading...</div>
    ),
    containerElement: (
      <div style={{ height: `100%`, width: "100%", borderRadius: "4px" }} />
    ),
    mapElement: <div style={{ height: `100%`, borderRadius: "4px" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  // to re-render map
  const [_random, _setRandom] = useState("");

  const {
    entries,
    labelStyle,
    onMarkerClick,
    infoBoxWrapperStyle,
    defaultCenter,
    defaultZoom
  } = props;
  return (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
      {entries.map(entry => (
        <>
          {entry.name ? (
            <MarkerWithLabel
              onMouseOver={() => {
                _.set(entry, "isInfoBoxOpen", true);
                _setRandom(Math.random());
              }}
              onMouseOut={() => {
                _.set(entry, "isInfoBoxOpen", false);
                _setRandom(Math.random());
              }}
              position={{ lat: entry.latitude, lng: entry.longitude }}
              labelAnchor={new google.maps.Point(0, 0)}
              onClick={() => {
                onMarkerClick(entry);
                _.set(entry, "isInfoBoxOpen", true);
                _setRandom(Math.random());
              }}
              animation={google.maps.Animation.DROP}
              icon={entry.icon}
              labelStyle={labelStyle}
            >
              <div>
                {entry.name}
                {entry.infoBox && entry.isInfoBoxOpen && (
                  <InfoBox
                    options={{
                      closeBoxURL: ``,
                      enableEventPropagation: true
                    }}
                    defaultPosition={
                      new google.maps.LatLng(entry.latitude, entry.longitude)
                    }
                  >
                    {entry.infoBox(infoBoxWrapperStyle)}
                  </InfoBox>
                )}
              </div>
            </MarkerWithLabel>
          ) : (
            <Marker
              onMouseOver={() => {
                _.set(entry, "isInfoBoxOpen", true);
                _setRandom(Math.random());
              }}
              onMouseOut={() => {
                _.set(entry, "isInfoBoxOpen", false);
                _setRandom(Math.random());
              }}
              position={{ lat: entry.latitude, lng: entry.longitude }}
              onClick={() => onMarkerClick(entry)}
              animation={google.maps.Animation.DROP}
              icon={entry.icon}
            >
              {entry.infoBox && entry.isInfoBoxOpen && (
                <InfoWindow
                  onCloseClick={() => {
                    _.set(entry, "isInfoBoxOpen", true);
                    _setRandom(Math.random());
                  }}
                  defaultPosition={
                    new google.maps.LatLng(entry.latitude, entry.longitude)
                  }
                >
                  {entry.infoBox(infoBoxWrapperStyle)}
                </InfoWindow>
              )}
            </Marker>
          )}
        </>
      ))}
    </GoogleMap>
  );
});

export default MapComponent;
