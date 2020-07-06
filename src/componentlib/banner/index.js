import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { flexBoxUtil } from "../utlis";
import { colors } from "../configs";

const Wrapper = styled.div`
	background: ${props => props.bannerBg};
	height: 4em;
	${flexBoxUtil("row", "space-between", "center")}
	padding:0px 1em;
	${props => (props.bannerWidth ? `width:${props.bannerWidth}` : `flex:1`)}
`;

const DivSection = styled.div`
	${flexBoxUtil("row", props => props.alignDivItems, "center")};
	height: 100%;
	width: max-content;
`;

const DivContainer = styled.div`
	padding: 0px 0.5em;
	color: ${colors.white};
`;

export function Banner(props) {
	const { rightDivItems, centerDivItems, leftDivItems } = props;
	return (
		<Wrapper {...props}>
			{leftDivItems.length !== 0 && (
				<DivSection alignDivItems="flex-end">
					{leftDivItems.map(item => (
						<DivContainer>{item()}</DivContainer>
					))}
				</DivSection>
			)}
			{centerDivItems.length !== 0 && (
				<DivSection>
					{centerDivItems.map(item => (
						<DivContainer>{item()}</DivContainer>
					))}
				</DivSection>
			)}
			{rightDivItems.length !== 0 && (
				<DivSection alignDivItems="flex-start">
					{rightDivItems.map(item => (
						<DivContainer>{item()}</DivContainer>
					))}
				</DivSection>
			)}
		</Wrapper>
	);
}

Banner.propTypes = {
	bannerBg: PropTypes.string,
	bannerWidth: PropTypes.string,
	alignDivItems: PropTypes.string,
	rightDivItems: PropTypes.arrayOf(PropTypes.element),
	centerDivItems: PropTypes.arrayOf(PropTypes.element),
	leftDivItems: PropTypes.arrayOf(PropTypes.element)
};

Banner.defaultProps = {
	bannerBg: colors.blueberry,
	//   bannerWidth: "200px",
	alignDivItems: "center",
	rightDivItems: [],
	centerDivItems: [],
	leftDivItems: []
};
