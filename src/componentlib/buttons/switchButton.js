import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacings, colors, fonts } from "../configs";
import { TextStyle33 } from "../index";
import { cursorUtil, flexBoxUtil } from "../utlis";

const SwitchWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  ${flexBoxUtil("row", "flex-start", "center")}
`;

const Switch = styled.span`
  content: "";
  position: absolute;
  left: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.2s;
  background: ${colors.white};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  border: ${colors.border_grey} 0.8px solid;
  cursor: ${props => cursorUtil(props.disabled)};
`;

const SwitchLabel = styled.label`
  align-items: center;
  background: ${props =>
    props.isActive ? props.activeBgColor : props.inActiveBgColor};
  border-radius: 34px;
  display: flex;
  height: ${props => props.btnHeight};
  justify-content: space-between;
  position: relative;
  padding: 5px;
  transition: background-color 0.2s;
  width: ${props => props.btnWidth};

  &:active ${Switch} {
    width: 36px;
  }

  & > p {
    width: 100%;
    text-align: ${props => (props.isActive ? "left" : "right")};
    transition: text-align 0.2s;
  }
`;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${SwitchLabel} ${Switch} {
    left: calc(100%);
    transform: translateX(-100%);
  }
`;

const SwitchText = ({ label, disabled, labelColor }) => (
  <TextStyle33
    color={labelColor}
    style={{
      padding: "1px",
      marginLeft: "10px",
      cursor: `${cursorUtil(disabled)}`
    }}
  >
    {label}
  </TextStyle33>
);

export const SwitchButton = props => {
  const {
    initialState,
    handleToggle,
    activeLabel,
    inActiveLabel,
    isDisabled,
    labelColor
  } = props;
  const [state, setState] = useState(initialState);
  const onChangeHandler = () => {
    setState(!state);
    handleToggle(!state);
  };

  return (
    <SwitchWrapper disabled={isDisabled}>
      <SwitchInput
        id="switch-input"
        type="checkbox"
        checked={state}
        onChange={() => (isDisabled ? {} : onChangeHandler())}
      />

      <SwitchLabel
        htmlFor="switch-input"
        isActive={state}
        disabled={isDisabled}
        {...props}
      >
        <Switch disabled={isDisabled} />
      </SwitchLabel>
      <SwitchText
        label={state ? activeLabel : inActiveLabel}
        disabled={isDisabled}
        labelColor={labelColor}
      />
    </SwitchWrapper>
  );
};

SwitchButton.propTypes = {
  initialState: PropTypes.bool,
  handleToggle: PropTypes.func,
  activeLabel: PropTypes.string,
  inActiveLabel: PropTypes.string,
  activeBgColor: PropTypes.string,
  inActiveBgColor: PropTypes.string,
  labelColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  btnHeight: PropTypes.number,
  btnWidth: PropTypes.number
};

SwitchButton.defaultProps = {
  initialState: true,
  handleToggle: () => {},
  activeLabel: "ONLINE",
  inActiveLabel: "OFFLINE",
  activeBgColor: colors.dark_lime_green,
  inActiveBgColor: colors.grey_darkest_30,
  labelColor: colors.text_grey,
  isDisabled: false,
  btnHeight: "18px",
  btnWidth: "50px"
};
