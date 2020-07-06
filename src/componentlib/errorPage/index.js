import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PrimaryButton, TextStyle29 } from "../index";
import { flexBoxUtil } from "../utlis";

const FullPage = styled.div`
  ${flexBoxUtil("column", "center", "center")}
`;

export const ErrorPage = ({
  bannerText,
  onClickHandler,
  btnLabel,
  wrapperStyle
}) => {
  return (
    <FullPage style={wrapperStyle}>
      <TextStyle29>{bannerText}</TextStyle29>
      <PrimaryButton
        btnPadding="1% 2%"
        label={btnLabel}
        onClickHandler={() => {
          onClickHandler();
        }}
      />
    </FullPage>
  );
};

ErrorPage.propTypes = {
  bannerText: PropTypes.string,
  btnLabel: PropTypes.string,
  onClickHandler: PropTypes.func,
  wrapperStyle: PropTypes.object
};

ErrorPage.defaultProps = {
  bannerText: "Banner Text",
  btnLabel: "Click me",
  onClickHandler: () => {},
  wrapperStyle: {
    flex: "1",
    width: "100%",
    height: "100vh"
  }
};
