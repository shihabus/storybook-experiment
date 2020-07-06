import React from "react";
import CustomSelect from "./index";
import renderer from "react-test-renderer";

const customSelectStyles = {
  outerContainer: {
    width: "100%",
    minWidth: "100%"
  },
  labelText: {},
  selectStyles: {
    container: (provided, state) => ({
      ...provided,
      flex: "1",
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

it("renders correctly", () => {
  const tree = renderer
    .create(<CustomSelect customStyles={customSelectStyles} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
