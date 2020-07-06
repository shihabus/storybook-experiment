export const validationRules = {
  email: {
    required: true,
    isEmail: true
  },
  name: {
    required: true,
    isName: true
  },

  password: {
    required: true
  },

  numberPlate: {
    isNumberPlate: true,
    maxLength: 4
  },

  numberPlateFull: {
    isNumberPlate: true
  },

  numeric: {
    isNumeric: true
  },

  text: {
    isAlpha: true
  },

  mobileNumber: {
    isNumeric: true,
    minLength: 10,
    maxLength: 10
  },

  OTP: {
    required: true,
    maxLength: 4,
    minLength: 4
  }
};
