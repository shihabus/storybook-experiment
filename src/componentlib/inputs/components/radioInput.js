import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { colors } from "../../configs";
import {
	ListWrapper,
	Item,
	Wrapper,
	RadioButton,
	RadioButtonLabel,
	ListItemWrapper
} from "./styledComponents";
import { TextStyle22 } from "../../textStyles";

const RadioInput = props => {
	const { name, option, handleSelect, radioColor } = props;

	return (
		<ListItemWrapper>
			<Item>
				<RadioButton
					radioColor={radioColor}
					type="radio"
					id={option.value}
					name={name}
					value={option.value}
					onChange={() => handleSelect(option)}
				/>
				<RadioButtonLabel />
				<TextStyle22>{option.label}</TextStyle22>
			</Item>
		</ListItemWrapper>
	);
};

const RadioInputList = props => {
	const { options, label, listName, radioColor, onChangeCallback } = props;

	const [selectedOption, setSelectedOption] = useState({
		label: "",
		value: ""
	});

	const onSelectionChange = option => {
		setSelectedOption(option);
		onChangeCallback(option);
	};

	return (
		<ListWrapper wrapperPadding="5px">
			{label && <TextStyle22>{label}</TextStyle22>}
			{options.map((option, index) => (
				<RadioInput
					name={listName}
					key={index}
					option={option}
					handleSelect={option => onSelectionChange(option)}
					radioColor={radioColor}
				/>
			))}
		</ListWrapper>
	);
};

RadioInputList.propTypes = {
	options: PropTypes.array,
	label: PropTypes.string,
	listName: PropTypes.string.isRequired
};

RadioInputList.defaultProps = {
	onChangeCallback: () => {},
	options: [],
	label: "",
	listName: ""
};

export { RadioInputList };
