import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextStyle22, SecondaryButton } from "../index";
import { flexBoxUtil } from "../utlis";
import { colors } from "../configs";
import _ from "lodash";

const SelectOuterContainer = styled.div`
  ${flexBoxUtil("row", "flex-start", "center")};
  width: 100%;
  min-width: 50%;
`;

const LabelContainer = styled.div`
  margin-right: 10px;
`;

const GroupWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
  ${flexBoxUtil("row", "flex-start", "flex-start")};
`;

export default function ButtonGroup(props) {
  const {
    options,
    labelText,
    wrapperStyle,
    onChangeCallBack,
    buttonBgColor,
    buttonTextColor,
    buttonActiveBgColor,
    buttonActiveTextColor
  } = props;
  const [currentSelection, setCurrentSelection] = useState(props.currentValue);

  return (
    <SelectOuterContainer style={wrapperStyle}>
      {labelText && (
        <LabelContainer>
          <TextStyle22>{labelText}</TextStyle22>
        </LabelContainer>
      )}
      <GroupWrapper>
        {options.map((option, idx) => (
          <SecondaryButton
            disabled={option.isDisabled}
            key={idx}
            label={option.value}
            btnBgColor={
              option.value === currentSelection.value
                ? buttonActiveBgColor
                : buttonBgColor
            }
            borderColor={
              option.value === currentSelection.value
                ? buttonActiveTextColor
                : buttonTextColor
            }
            onClickHandler={() => {
              onChangeCallBack(option);
              setCurrentSelection(option);
            }}
          />
        ))}
      </GroupWrapper>
    </SelectOuterContainer>
  );
}

ButtonGroup.defaultProps = {
  labelText: "Label",
  onChangeCallBack: () => {},
  options: [
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3", isDisabled: true }
  ],
  currentValue: { value: "Option 1" },
  wrapperStyle: {
    padding: "0.5em"
  },
  buttonBgColor: colors.white,
  buttonTextColor: colors.blueberry,
  buttonActiveBgColor: colors.blueberry,
  buttonActiveTextColor: colors.white
};

ButtonGroup.propTypes = {
  labelText: PropTypes.string,
  onChangeCallBack: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool
    })
  ).isRequired,
  currentValue: PropTypes.shape({
    value: PropTypes.string
  }),
  wrapperStyle: PropTypes.object,
  buttonBgColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonActiveBgColor: PropTypes.string,
  buttonActiveTextColor: PropTypes.string
};
