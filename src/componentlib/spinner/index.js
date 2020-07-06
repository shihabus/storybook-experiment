import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { colors } from "../configs";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerLoaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding};
`;

const Spinner = styled.div`
  border: ${props => props.borderWidth} solid ${props => props.ringColor};
  border-top: ${props => props.borderWidth} solid ${props => props.sectorColor};
  border-radius: 50%;
  width: ${props => props.dimension};
  height: ${props => props.dimension};
  animation: ${spin} 2s linear infinite;
`;

export const SpinnerLoader = ({
  spinnerPadding,
  spinnerDimension,
  spinnerBorderWidth,
  sectorColor,
  ringColor
}) => (
  <SpinnerLoaderWrapper padding={spinnerPadding}>
    <Spinner
      dimension={spinnerDimension}
      borderWidth={spinnerBorderWidth}
      sectorColor={sectorColor}
      ringColor={ringColor}
    />
  </SpinnerLoaderWrapper>
);

SpinnerLoader.propTypes = {
  spinnerPadding: PropTypes.string,
  spinnerDimension: PropTypes.string,
  spinnerBorderWidth: PropTypes.string,
  sectorColor: PropTypes.string,
  ringColor: PropTypes.string
};

SpinnerLoader.defaultProps = {
  spinnerPadding: "0",
  spinnerDimension: "25px",
  spinnerBorderWidth: "2.5px",
  sectorColor: colors.rich_blue,
  ringColor: colors.very_light_pink_2
};
