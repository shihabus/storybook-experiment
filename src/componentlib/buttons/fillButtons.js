import React from "react";
import PropTypes from "prop-types";
import { colors } from "../configs";

import { DefaultButton } from "./commonButtons";

const PrimaryButton = props => {
  const { disabled, showLoader, disabledBgColor, btnBgColor } = props;
  return (
    <DefaultButton
      {...props}
      btnBgColor={disabled || showLoader ? disabledBgColor : btnBgColor}
    />
  );
};

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  btnBgColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
  onClickHandler: PropTypes.func
};

PrimaryButton.defaultProps = {
  disabled: false,
  showLoader: false,
  disabledBgColor: colors.brown_grey_one,
  btnBgColor: colors.blueberry,
  onClickHandler: () => {}
};

const SuccessButton = props => {
  return <PrimaryButton {...props} />;
};

SuccessButton.propTypes = {
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  btnBgColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
  onClickHandler: PropTypes.func
};

SuccessButton.defaultProps = {
  disabled: false,
  showLoader: false,
  disabledBgColor: colors.brown_grey_one,
  btnBgColor: colors.watermelon,
  onClickHandler: () => {}
};

export { PrimaryButton, SuccessButton };
