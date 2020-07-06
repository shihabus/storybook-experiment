/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextStyle22 } from "../index";
import { spacings, colors } from "../configs";

const OuterContainer = styled.div`
  margin: 1em 0px;
  background: ${colors.transparent};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.inputHeight};
  padding: ${props => props.wrapperPadding};
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10px;
`;

const InputWrapper = styled.textarea`
  display: flex;
  ${props =>
    props.inputFieldWidth ? { width: props.inputFieldWidth } : { flex: 1 }};
  min-height: 38px;
  padding-left: ${spacings.default};
  padding-top: ${spacings.default};
  color: ${colors.slate_grey};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacings: normal;
  background-color: ${colors.white};
  border-color: ${colors.brown_grey};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  outline: 0 !important;
  transition: all 100ms;

  :focus {
    border: 1.5px solid #2684ff;
  }

  ::placeholder {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacings: normal;
    color: ${colors.grey_two};
  }
`;

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

export default function TextArea(props) {
  const { labelText, maxLength, onValueChangeCallBack, currentValue } = props;
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    onValueChangeCallBack(value);
  }, [value]);
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <OuterContainer {...props}>
      {labelText && (
        <LabelContainer>
          <TextStyle22>{labelText || "Text"}</TextStyle22>
        </LabelContainer>
      )}
      <InputWrapper
        {...props}
        maxlength={maxLength}
        value={value}
        onChange={e => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
    </OuterContainer>
  );
}

TextArea.defaultProps = {
  labelText: "Label",
  inputHeight: "40px",
  currentValue: "",
  onValueChangeCallBack: () => {},
  wrapperPadding: "3% 2%",
  placeholder: "Please enter..",
  maxLength: "200",
  cols: 4,
  rows: 4
};
