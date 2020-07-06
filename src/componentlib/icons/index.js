import React from "react";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import { colors } from "../configs";

const IconContainer = styled.div`
	width: 15%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${props => props.justifyContent};
`;

IconContainer.defaultProps = {
	justifyContent: "space-between"
};

const Icon = styled.div`
	width: 50px;
	height: 50px;
	background-color: ${props =>
		props.backGround ? props.backGround : colors.veryLightPink};
	border-radius: 50%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

export const RoundIcon = ({ bike, hub }) => (
	<IconContainer>
		<Icon backGround={colors.veryLightPink} style={{ fontSize: "30px" }}>
			{bike && `🛵`}
			{hub && `🏠`}
		</Icon>
	</IconContainer>
);

const AssignIcon = () => (
	<Icon backGround={colors.azure}>
		<IoIosAdd style={{ fontSize: "50px" }} />
	</Icon>
);

export const AssignRoundIcon = () => (
	<IconContainer justifyContent="space-around">
		<AssignIcon />
		{/* <TextStyle2>Assign</TextStyle2> */}
	</IconContainer>
);
