import React from "react";
import PropTypes from "prop-types";
import { IoIosRefreshCircle } from "react-icons/io";
import styled, { keyframes, css } from "styled-components";
import { flexBoxUtil, cursorUtil, bgColorSetter } from "../utlis";
import { colors } from "../configs";
import { TextStyle27, TextStyle3 } from "../index";

const RefreshButtonLabelContainer = styled.div`
  ${flexBoxUtil("column")}
  margin-left: 6px;
  cursor: ${props => cursorUtil(props.isDisabled || props.isLoading)};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div(({ spin }) => {
  return css`
    display: flex;
    animation: ${rotate} ${spin ? "2s" : "0s"} linear infinite;
  `;
});

const Wrapper = styled.div(props => ({
  display: "flex",
  background: props.btnBg,
  borderRadius: props.btnBorderRadius,
  padding: props.btnPadding,
  width: "max-content",
  cursor: `${cursorUtil(props.isDisabled || props.isLoading)}`,
  ...props
}));

export const RefreshButton = props => {
  const {
    isDisabled,
    onClickHandler,
    label,
    secondaryText,
    isLoading,
    loadingLabel,
    disabledColor,
    activeColor
  } = props;
  return (
    <Wrapper {...props}>
      <Rotate spin={isLoading}>
        <IoIosRefreshCircle
          style={{
            fontSize: "40px",
            color: bgColorSetter(
              props.isDisabled || props.isLoading,
              activeColor,
              disabledColor
            ),
            cursor: cursorUtil(props.isDisabled || props.isLoading)
          }}
        />
      </Rotate>
      <RefreshButtonLabelContainer isDisabled={isDisabled}>
        <TextStyle3
          fontWeight="normal"
          style={{
            margin: 0,
            color: bgColorSetter(
              props.isDisabled || props.isLoading,
              activeColor,
              disabledColor
            ),
            cursor: cursorUtil(props.isDisabled || props.isLoading)
          }}
        >
          {isLoading ? loadingLabel : label}
        </TextStyle3>
        <TextStyle27
          style={{
            margin: 0,
            color: bgColorSetter(
              props.isDisabled || props.isLoading,
              colors.black,
              disabledColor
            )
          }}
        >
          {secondaryText}
        </TextStyle27>
      </RefreshButtonLabelContainer>
    </Wrapper>
  );
};

RefreshButton.defaultProps = {
  btnBg: colors.marigold,
  btnBorderRadius: "4em",
  btnPadding: "1% 2%",
  isDisabled: false,
  isLoading: false,
  onClickHandler: () => {},
  secondaryText: "03 06 2019",
  label: "Refresh",
  loadingLabel: "Refreshing",
  disabledColor: colors.brown_grey_one,
  activeColor: colors.blueberry
};

RefreshButton.propTypes = {
  btnBg: PropTypes.string,
  btnBorderRadius: PropTypes.string,
  btnPadding: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClickHandler: PropTypes.func,
  secondaryText: PropTypes.string,
  label: PropTypes.string,
  loadingLabel: PropTypes.string,
  disabledColor: PropTypes.string,
  activeColor: PropTypes.string
};
