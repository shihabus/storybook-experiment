import React from "react";
import PropTypes from "prop-types";
import { colors } from "../configs";

import { DefaultButton } from "./commonButtons";

const SecondaryButton = props => {
  const { borderColor, disabled, showLoader, disabledBorderColor } = props;
  return (
    <DefaultButton
      {...props}
      labelColor={disabled || showLoader ? disabledBorderColor : borderColor}
      borderColor={disabled || showLoader ? disabledBorderColor : borderColor}
    />
  );
};

SecondaryButton.propTypes = {
  border: PropTypes.string,
  borderColor: PropTypes.string,
  btnBgColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
  disabledBorderColor: PropTypes.string,
  onClickHandler: PropTypes.func
};

SecondaryButton.defaultProps = {
  border: "1px solid",
  borderColor: colors.rich_blue,
  btnBgColor: colors.white,
  disabledBgColor: colors.white,
  disabledBorderColor: colors.brown_grey_one,
  onClickHandler: () => {}
};

const LinkButton = props => {
  const { disabled, showLoader, disabledBorderColor, labelColor } = props;
  return (
    <DefaultButton
      {...props}
      labelColor={disabled || showLoader ? disabledBorderColor : labelColor}
    />
  );
};

LinkButton.propTypes = {
  border: PropTypes.string,
  borderColor: PropTypes.string,
  btnBgColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
  disabledBorderColor: PropTypes.string,
  onClickHandler: PropTypes.func
};

LinkButton.defaultProps = {
  border: "none",
  labelColor: colors.rich_blue,
  btnBgColor: "transparent",
  disabledBgColor: "transparent",
  disabledBorderColor: colors.brown_grey_one,
  onClickHandler: () => {}
};

export { SecondaryButton, LinkButton };
