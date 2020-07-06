import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacings, colors, fonts } from "../configs";
import { TextStyle14, TextStyle2, TextStyle10 } from "../index";
const TabButtonWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${props => (props.selected ? colors.white : colors.paleLilac)};
`;

export const TabButton = ({ tab, tabClickHandler, selected }) => (
	<TabButtonWrapper onClick={() => tabClickHandler(tab)} selected={selected}>
		<TextStyle10>{tab.label}</TextStyle10>
	</TabButtonWrapper>
);
