import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  emailConfig,
  passwordConfig,
  numberPlateConfig,
  numericConfig,
  textConfig,
  telConfig,
  OTPConfig
} from "./input-config";
import { updateElemObj, checkValidity } from "./utils";
import { validationRules } from "./validation-rules";
import { CustomInput } from "./components";

const ConfigInput = props => {
  const { config, inputChangeHandler } = props;
  return (
    <CustomInput
      elementType="input"
      {...config}
      elementConfig={config.config}
      onChange={event => {
        inputChangeHandler(event, config);
      }}
      isValid={config.valid}
      {...props}
    />
  );
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        eleType: "input",
        eleName: "email",
        value: "",
        validation: validationRules.email,
        config: emailConfig,
        valid: true,
        touched: false
      },
      numberPlate: {
        eleType: "input",
        eleName: "numberPlate",
        value: "",
        validation: validationRules.numberPlate,
        config: numberPlateConfig,
        valid: true,
        touched: false
      },
      numeric: {
        eleType: "input",
        eleName: "numeric",
        value: "",
        validation: validationRules.numeric,
        config: numericConfig,
        valid: true,
        touched: false
      },
      text: {
        eleType: "input",
        eleName: "text",
        value: "",
        validation: validationRules.text,
        config: textConfig,
        valid: true,
        touched: false
      },
      mobileNumber: {
        eleType: "input",
        eleName: "mobileNumber",
        value: "",
        validation: validationRules.mobileNumber,
        config: telConfig,
        valid: true,
        touched: false
      },
      password: {
        eleType: "input",
        eleName: "password",
        value: "",
        validation: validationRules.password,
        config: passwordConfig,
        valid: true,
        touched: false
      },
      OTP: {
        eleType: "input",
        eleName: "OTP",
        value: "",
        validation: validationRules.OTP,
        config: OTPConfig,
        valid: true,
        touched: false
      }
    };
  }

  inputChangeHandler = (event, elem) => {
    const { onChangeCallback } = this.props;
    event.preventDefault();
    event.stopPropagation();
    const updatedObject = updateElemObj(elem, {
      value: event.target.value,
      valid: checkValidity(event.target.value, elem.validation),
      touched: true
    });
    this.setState({ [elem.eleName]: { ...updatedObject } }, () =>
      onChangeCallback(updatedObject)
    );
  };

  render() {
    const {
      numberPlate,
      numeric,
      text,
      mobileNumber,
      OTP,
      password
    } = this.state;
    const { type } = this.props;
    return (
      <React.Fragment>
        {type === "numberPlate" && (
          <ConfigInput
            id="numberPlate"
            config={numberPlate}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
        {type === "numeric" && (
          <ConfigInput
            id="numeric"
            config={numeric}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
        {type === "text" && (
          <ConfigInput
            id="text"
            config={text}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
        {type === "mobileNumber" && (
          <ConfigInput
            id="mobileNumber"
            config={mobileNumber}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
        {type === "password" && (
          <ConfigInput
            id="password"
            config={password}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
        {type === "OTP" && (
          <ConfigInput
            id="otp"
            config={OTP}
            inputChangeHandler={this.inputChangeHandler}
            {...this.props}
          />
        )}
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  type: PropTypes.oneOfType([
    "numberPlate",
    "numeric",
    "text",
    "mobileNumber",
    "password",
    "OTP"
  ]).isRequired,
  label: PropTypes.string.isRequired,
  inputFieldWidth: PropTypes.string.isRequired,
  wrapperPadding: PropTypes.string
};

Input.defaultProps = {
  onChangeCallback: () => {},
  type: "text",
  label: "Input",
  inputFieldWidth: "100%",
  wrapperPadding: "3% 2%"
};

export { Input };
