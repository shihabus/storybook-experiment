import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "assets/logo.png";

const BounceLogo = props => {
  const { altText } = props;
  return <img src={logo} alt={altText} {...props} />;
};
BounceLogo.propTypes = {
  margin: PropTypes.string,
  altText: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string
};

BounceLogo.defaultProps = {
  margin: "",
  altText: "BounceLogo",
  width: "40px",
  height: "36px"
};

export { BounceLogo };
