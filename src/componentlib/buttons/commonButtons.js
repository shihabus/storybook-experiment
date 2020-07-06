import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacings, colors, fonts } from "../configs";
import { SpinnerLoader } from "../spinner";

const ButtonWrapper = styled.div(props => ({
  backgroundColor: props.btnBgColor,
  margin: props.btnMargin,
  borderRadius: props.btnBorderRadius,
  padding: props.btnPadding,
  justifyContent: "center",
  alignItems: "center",
  cursor: props.showLoader || props.disabled ? "not-allowed" : "pointer",
  display: "flex",
  width: "max-content",
  ...props
}));

const ButtonTextWrapper = styled.div(props => ({
  color: props.labelColor,
  fontSize: props.labelFontSize,
  width: "100%",
  display: "flex",
  justifyContent: "center"
}));

const DefaultButton = props => {
  const {
    disabled,
    showLoader,
    label,
    btnBgColor,
    disabledBgColor,
    onClickHandler
  } = props;
  return (
    <ButtonWrapper
      {...props}
      onClick={disabled || showLoader ? {} : onClickHandler}
      btnBgColor={disabled || showLoader ? disabledBgColor : btnBgColor}
    >
      {showLoader ? (
        <SpinnerLoader
          spinnerDimension={"25px"}
          spinnerBorderWidth={"2.5px"}
          {...props}
        />
      ) : (
        <ButtonTextWrapper {...props}>
          {String(label).toUpperCase()}
        </ButtonTextWrapper>
      )}
    </ButtonWrapper>
  );
};

DefaultButton.propTypes = {
  btnBgColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
  btnMargin: PropTypes.string,
  btnBorderRadius: PropTypes.string,
  btnPadding: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
  label: PropTypes.string,
  showLoader: PropTypes.bool,
  disabled: PropTypes.bool,
  sectorColor: PropTypes.string,
  ringColor: PropTypes.string
};

DefaultButton.defaultProps = {
  btnBgColor: colors.blueberry,
  disabledBgColor: colors.brown_grey_one,
  btnMargin: "1% 1.2%",
  btnBorderRadius: "4em",
  btnPadding: "2% 4%",
  labelColor: colors.white,
  labelFontSize: "18px",
  label: "click me",
  showLoader: false,
  disabled: false,
  sectorColor: colors.text_grey,
  ringColor: colors.white_70
};

export { DefaultButton };
