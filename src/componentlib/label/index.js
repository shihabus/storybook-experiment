import React from "react";
import styled from "styled-components";
import { TextStyle5 } from "../index";
import { colors } from "../configs";

const LabelBox = styled.div`
	grid-area: label;
	display: flex;
	border-radius: 4px;
	justify-content: "flex-end";
	align-items: "flex-start";
	padding-top: "20%";
`;

const LabelDiv = styled.div`
	min-width: 105px;
	padding: 0 4px;
	height: 24px;
	border-radius: 2px;
	background-color: ${props => props.backgroundColor};
	justify-content: center;
	display: flex;
	align-items: center;
`;

LabelDiv.defaultProps = {
	backgroundColor: colors.warmGrey
};

export const StatusLabel = ({ labelText, labelBackground }) => {
	return (
		<LabelBox>
			<LabelDiv backgroundColor={labelBackground}>
				<TextStyle5 style={{ fontSize: "1em" }}>
					{labelText.toUpperCase()}
				</TextStyle5>
			</LabelDiv>
		</LabelBox>
	);
};
