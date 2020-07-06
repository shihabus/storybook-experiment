import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 30px 0px;
`;

export const EndOfList = ({ text }) => <Card>{text}</Card>;
EndOfList.propTypes = {
  text: PropTypes.string
};
