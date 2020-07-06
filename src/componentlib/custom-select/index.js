import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextStyle22 } from "../index";

const SelectOuterContainer = styled.div`
  display: flex;
  width: 50%;
  min-width: 50%;
  justify-content: flex-start;
  align-items: center;
  max-height: 50px;
`;

const LabelContainer = styled.div`
  margin-right: 10px;
`;

class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: this.initializer(props)
    };
  }

  initializer = ({ selection, initialValue }) => {
    if (selection.length) {
      return selection;
    } else if (initialValue.length) {
      return initialValue;
    }
    return [];
  };

  handleChange = value => {
    const { onChangeCallback, options, isMulti, valueKey } = this.props;
    if (isMulti) {
      if (
        value &&
        value.find(obj => {
          if (valueKey) {
            return obj[valueKey] === "All";
          }
          return obj.value === "All";
        })
      ) {
        let filteredOptions;
        if (valueKey) {
          filteredOptions = options.filter(obj => obj[valueKey] !== "All");
        } else {
          filteredOptions = options.filter(obj => obj.value !== "All");
        }
        this.setState({ selectedValues: filteredOptions }, () =>
          onChangeCallback(filteredOptions)
        );
      } else {
        this.setState({ selectedValues: value }, () => onChangeCallback(value));
      }
    } else {
      this.setState({ selectedValues: value }, () => onChangeCallback(value));
    }
  };

  customStyles = () => {
    const {
      inputFieldWidth,
      labelFontSize,
      labelColor,
      wrapperPadding,
      wrapperWidth
    } = this.props;
    const _width = inputFieldWidth ? { width: inputFieldWidth } : { flex: "1" };
    return {
      outerContainer: {
        width: wrapperWidth,
        height: "45px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: wrapperPadding
      },
      labelText: {
        color: labelColor,
        fontSize: labelFontSize
      },
      selectStyles: {
        container: (provided, state) => ({
          ...provided,
          ..._width,
          maxHeight: "45px"
        }),
        control: (provided, state) => ({
          ...provided,
          flex: "1",
          maxHeight: "45px"
        }),
        valueContainer: provided => ({
          ...provided,
          maxHeight: "43px",
          paddingBottom: "2px",
          overflow: "auto"
        })
      }
    };
  };

  render() {
    const {
      options,
      labelKey,
      valueKey,
      placeholder,
      labelText,
      isMulti,
      closeMenuOnSelect
    } = this.props;

    return (
      <SelectOuterContainer style={this.customStyles().outerContainer}>
        {labelText && (
          <LabelContainer>
            <TextStyle22 style={this.customStyles().labelText}>
              {labelText || "Text"}
            </TextStyle22>
          </LabelContainer>
        )}
        <Select
          closeMenuOnSelect={closeMenuOnSelect}
          disabled={false}
          isMulti={isMulti}
          options={
            isMulti ? [{ label: "All", value: "All" }, ...options] : options
          }
          placeholder={placeholder}
          hideSelectedOptions={false}
          rtl={false}
          simpleValue
          value={this.state.selectedValues}
          styles={this.customStyles().selectStyles}
          getOptionLabel={option => option[labelKey]}
          getOptionValue={option => option[valueKey]}
          onChange={this.handleChange}
        />
      </SelectOuterContainer>
    );
  }
}

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  placeholder: PropTypes.string,
  selection: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
  onChangeCallback: PropTypes.func,
  customStyles: PropTypes.object,
  labelText: PropTypes.string,
  isMulti: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  labelColor: PropTypes.string
};

CustomSelect.defaultProps = {
  options: [
    { label: "First", value: "First" },
    { label: "Second", value: "Second" }
  ],
  initialValue: [{ label: "First", value: "First" }],
  onChangeCallback: () => {},
  storageName: "default",
  isMulti: false,
  selection: [],
  closeMenuOnSelect: false,
  labelText: "Select",
  labelKey: "label",
  valueKey: "value",
  placeholder: "Please select",
  inputFieldWidth: "100%",
  labelFontSize: "16px",
  wrapperPadding: "3% 2%",
  wrapperWidth: "100%"
};

export { CustomSelect };
