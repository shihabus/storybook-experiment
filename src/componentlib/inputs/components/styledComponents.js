import styled from "styled-components";
import { colors, spacings } from "../../configs";

const Wrapper = styled.div`
	background: ${colors.transparent};
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: ${props => props.wrapperPadding};
`;

const IconHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px ${spacings.default};
`;
const InputWrapper = styled.input`
	display: flex;
	${props =>
		props.inputFieldWidth ? { width: props.inputFieldWidth } : { flex: 1 }};
	min-height: 38px;
	padding-left: ${spacings.default};
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
		border: 1px solid
			${props =>
				props.isValid ? colors.dark_lime_green : colors.error_red};
	}

	::placeholder {
		font-family: Roboto;
		font-size: 16px;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacings: normal;
		color: ${colors.grey_two};
	}
`;

const LabelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-right: 10px;
`;

const PasswordContainerWrapper = styled.div`
	background: colors.white;
	display: flex;
	border-radius: 4px;
	border: 1px solid;
	border-color: ${colors.brown_grey};
	justify-content: space-between;
	margin-left: 10px;
	overflow: auto;
	${props =>
		props.inputFieldWidth ? { width: props.inputFieldWidth } : { flex: 1 }};
`;

const RadioButtonLabel = styled.label`
	position: absolute;
	top: 25%;
	left: 4px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: white;
	border: 1px solid #bebebe;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	position: relative;
`;

const RadioButton = styled.input`
	id: ${props => props.id};
	name: ${props => props.name};
	value: ${props => props.value};
	opacity: 0;
	z-index: 1;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	margin-right: 10px;
	&:hover ~ ${RadioButtonLabel} {
		background: ${props => props.hoverColor};
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 12px;
			height: 12px;
			margin: 5px;
			background: #eeeeee;
		}
	}
	&:checked + ${RadioButtonLabel} {
		background: ${props => props.radioColor};
		border: 1px solid ${props => props.radioColor};
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 12px;
			height: 12px;
			margin: 5px;
			box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
			background: white;
		}
	}
`;

RadioButton.defaultProps = {
	hoverColor: "#bebebe",
	radioColor: "#db7290"
};

const ListItemWrapper = styled.div`
	background: ${colors.transparent};
	width: 100%;
	height: auto;
	width: 100%;
	box-sizing: border-box;
	padding: ${props => props.wrapperPadding};
`;

const ListWrapper = styled.div`
	background: ${colors.transparent};
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding: ${props => props.wrapperPadding};
`;

export {
	Wrapper,
	IconHolder,
	InputWrapper,
	LabelContainer,
	PasswordContainerWrapper,
	Item,
	RadioButton,
	RadioButtonLabel,
	ListWrapper,
	ListItemWrapper
};
