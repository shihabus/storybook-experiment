import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fonts } from "../configs";

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-weight: 600px;
  font-size: ${props =>
    props.fontSize ? props.fontSize : fonts.sizes.default};
`;

export const NoDataAvailable = () => <Card>No Data Available</Card>;
