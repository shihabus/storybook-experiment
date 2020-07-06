import React, { useState } from "react";
import PropTypes from "prop-types";
import { colors } from "../../configs";
import {
  Wrapper,
  IconHolder,
  InputWrapper,
  LabelContainer,
  PasswordContainerWrapper
} from "./styledComponents";
import { TextStyle22 } from "../../textStyles";
import { passwordVisibleConfig } from "../input-config";
import { IoIosMail, IoMdKey, IoIosEyeOff, IoIosEye } from "react-icons/io";

const InputContainer = props => {
  const {
    elementConfig,
    config: { validation }
  } = props;
  return <InputWrapper {...elementConfig} {...props} {...validation} />;
};

const PasswordInputContainer = props => {
  const { elementConfig, inputFieldWidth } = props;
  const [isVisible, setIsVisible] = useState(true);
  let _elemConfig = isVisible ? elementConfig : passwordVisibleConfig;
  return (
    <PasswordContainerWrapper inputFieldWidth={inputFieldWidth}>
      <InputWrapper
        {...props}
        {..._elemConfig}
        style={{
          border: "none",
          display: "flex",
          flex: "1"
        }}
      />
      <IconHolder
        onClick={() => setIsVisible(!isVisible)}
        style={{ cursor: "pointer" }}
      >
        {isVisible ? (
          <IoIosEyeOff style={{ fontSize: "20px", color: colors.slate_grey }} />
        ) : (
          <IoIosEye style={{ fontSize: "20px", color: colors.slate_grey }} />
        )}
      </IconHolder>
    </PasswordContainerWrapper>
  );
};

const IconContainer = ({ type }) => (
  <IconHolder>
    {type === "email" && <IoIosMail style={{ fontSize: "30px" }} />}
    {type === "password" && <IoMdKey style={{ fontSize: "30px" }} />}
  </IconHolder>
);

const CustomInput = props => {
  const { label, type, labelStyles, wrapperPadding } = props;
  return (
    <Wrapper wrapperPadding={wrapperPadding}>
      {false && <IconContainer type={type} />}
      {label && (
        <LabelContainer style={labelStyles}>
          <TextStyle22>{label}</TextStyle22>
        </LabelContainer>
      )}
      {type === "password" ? (
        <PasswordInputContainer {...props} />
      ) : (
        <InputContainer {...props} />
      )}
    </Wrapper>
  );
};

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  elementConfig: PropTypes.object,
  isValid: PropTypes.bool,
  touched: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.number,
  wrapperPadding: PropTypes.string,
  type: PropTypes.string.isRequired,
  show: PropTypes.bool
};

export { CustomInput };
