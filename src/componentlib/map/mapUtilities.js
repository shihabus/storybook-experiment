import React from "react";
import bikeLogo from "assets/scooter.png";

// export const MAP_API_KEY = "AIzaSyClEa2yUGqcglOd8J2kMhCIRI6ToRTa6cA"; //old key

// TO DO BEFORE PRODUCTION UNCOMMENT
// export const MAP_API_KEY = 'AIzaSyBJG0FV8g6IJ6kyWVy52GeLwkYeNlIRjA8';

// export const MAP_API_KEY = "";

export const places = [
  {
    id: 1,
    name: "Vehicle1 shihab was testing",
    content: "I am vehicle number 1",
    longitude: 77.59695053100585,
    latitude: 12.968761817617018,
    isInfoBoxOpen: false,
    icon: bikeLogo
  },
  {
    id: 2,
    name: "Vehicle2",
    content: "I am vehicle number 2",
    longitude: 77.5663948059082,
    latitude: 12.96457971408171,
    isInfoBoxOpen: false
  },
  {
    id: 3,
    name: "Vehicle3",
    content: "I am vehicle number 3",
    longitude: 77.62767791748047,
    latitude: 12.977293090826695,
    isInfoBoxOpen: false
  },
  {
    id: 4,
    name: "Vehicle4",
    content: "I am vehicle number 4",
    longitude: 77.59437561035156,
    latitude: 12.991009426122396,
    isInfoBoxOpen: false,
    icon: bikeLogo
  },
  {
    id: 5,
    name: "",
    content: "I am vehicle number 5",
    longitude: 77.61016845703125,
    latitude: 12.91221383678976,
    isInfoBoxOpen: false
  },
  {
    id: 6,
    name: "Vehicle6",
    content: "I am vehicle number 6",
    longitude: 77.534122467041,
    latitude: 12.913217758826503,
    isInfoBoxOpen: false
  },
  {
    id: 7,
    name: "Vehicle7",
    content: "I am vehicle number 7",
    longitude: 77.52262115478514,
    latitude: 12.995860143908684,
    isInfoBoxOpen: false
  }
];

export const coords = [
  {
    lng: 77.4528274,
    lat: 13.0662372
  },
  {
    lng: 77.4503502,
    lat: 13.028782
  },
  {
    lng: 77.5254992,
    lat: 13.0049039
  },
  {
    lng: 77.5282567,
    lat: 13.0101297
  },
  {
    lng: 77.5833393,
    lat: 13.0096819
  },
  {
    lng: 77.5404721,
    lat: 13.1407133
  },
  {
    lng: 77.4528274,
    lat: 13.0662372
  }
];

export const polyLineCoords = [
  { lng: 77.5843334197998, lat: 12.978296750786026 },
  { lng: 77.58819580078125, lat: 12.984904077694598 },
  { lng: 77.59489059448242, lat: 12.981893165697903 },
  { lng: 77.6022720336914, lat: 12.979216768855913 },
  { lng: 77.60295867919922, lat: 12.980889520259332 },
  { lng: 77.60390281677246, lat: 12.980554970879197 },
  { lng: 77.60441780090332, lat: 12.981893165697903 },
  { lng: 77.60330200195312, lat: 12.982896807083494 },
  { lng: 77.60355949401855, lat: 12.984318625441263 },
  { lng: 77.60476112365723, lat: 12.984151353115545 },
  { lng: 77.60587692260742, lat: 12.985656799993347 },
  { lng: 77.61076927185057, lat: 12.984987713618173 }
];

export const createMapInputData = (latitudeKey, longitudeKey) => data =>
  data.map(dataItem => {
    const latitude = dataItem[latitudeKey];
    const longitude = dataItem[longitudeKey];
    delete dataItem[latitudeKey];
    delete dataItem[longitudeKey];
    return {
      ...dataItem,
      latitude,
      longitude
    };
  });

export const createMapInputDataForTasks = createMapInputData(
  "taskLatitude",
  "taskLongitude"
);

export const createMapInputDataForAgents = createMapInputData(
  "agentLatitude",
  "agentLongitude"
);

export const alteredAgents = agents =>
  agents.map((agent, index) => ({
    ...agent,
    latitude: places[index].latitude,
    longitude: places[index].longitude
  }));

export const alterAgentsForAssignedTasks = agent => {
  const { latitude } = agent.lastLocation;
  const { longitude } = agent.lastLocation;
  return {
    ...agent,
    latitude,
    longitude
  };
};
