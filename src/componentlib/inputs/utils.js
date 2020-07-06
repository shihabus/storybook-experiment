import validator from "validator";

export const updateElemObj = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties
});

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.minValue) {
    isValid = value >= rules.minValue && isValid;
  }

  if (rules.maxValue) {
    isValid = value <= rules.maxValue && isValid;
  }

  if (rules.isAlpha) {
    isValid = (value === "" ? true : validator.isAlpha(value)) && isValid;
  }

  if (rules.isURL) {
    isValid = (value === "" ? true : validator.isURL(value)) && isValid;
  }

  if (rules.isName) {
    isValid =
      (value === "" ? true : validator.isAlpha(value.replace(/ +/g, ""))) &&
      isValid;
  }

  if (rules.isEmail) {
    isValid = (value === "" ? true : validator.isEmail(value)) && isValid;
  }

  if (rules.isPhone) {
    isValid =
      (value === "" ? true : validator.isMobilePhone(value, "en-IN")) &&
      isValid;
  }

  if (rules.isNumeric) {
    isValid = (value === "" ? true : validator.isNumeric(value)) && isValid;
  }

  if (rules.isAlphaNumeric) {
    isValid =
      (value === "" ? true : validator.isAlphanumeric(value)) && isValid;
  }

  // if (rules.isNumberPlate) {
  //   isValid = validator.matches(value, /^[A-Z]{2}(\s|-)[0-9]{1,2}(\s|-)[A-Z]{1,2}(\s|-)[0-9]{3,4}$/gm) || (value === '' && isValid);
  // }

  if (rules.isNumberPlate) {
    isValid =
      (value === "" ? true : validator.matches(value, /^\d{3,4}$/gm)) &&
      isValid;
  }

  return isValid;
};
