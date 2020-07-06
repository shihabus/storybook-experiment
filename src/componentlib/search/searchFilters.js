import React from "react";
import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";

import styled, { css } from "styled-components";
import { TextStyle11 } from "../textStyles";
import { colors } from "../configs";

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	padding: 4%;
	background: ${colors.very_light_pink_three};
	position: absolute;
	top: 40px;
	z-index: 1;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	-webkit-transition: height 1s ease; /* For Safari 3.1 to 6.0 */
	transition: height 1s ease;
	display: flex;
	flex-direction: column;
`;

const TopButtonWrapper = styled.div`
	width: 10%;
	height: 5%;
	position: absolute;
	right: 0px;
	display: flex;
	justify-content: center;
	cursor: pointer;
`;
const BottomButtonWrapper = styled.div`
	width: 95%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-self: center;
`;
const SearchButton = styled.button`
	width: 45%;
	height: 100%;
	display: flex;
	background: ${colors.watermelon};
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: ${props =>
		props.searchButtonDisabled ? "not-allowed" : "pointer"};
	border-radius: 10px;
`;
const ClearButton = styled.button`
	width: 45%;
	height: 100%;
	display: flex;
	background: gray;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	border-radius: 10px;
`;

export function SearchFilters({
	show,
	showCloseButton,
	children,
	onSearchFilterClose,
	onSearchButtonClicked,
	onSearchClearClicked,
	searchButtonDisabled
}) {
	return (
		<Wrapper show={show}>
			{showCloseButton && (
				<TopButtonWrapper onClick={() => onSearchFilterClose()}>
					<IoIosCloseCircleOutline style={{ fontSize: "30px" }} />
				</TopButtonWrapper>
			)}
			{children}
			<BottomButtonWrapper>
				<SearchButton
					onClick={() => onSearchButtonClicked()}
					searchButtonDisabled={searchButtonDisabled}
					disabled={searchButtonDisabled}
				>
					<TextStyle11>Search</TextStyle11>
				</SearchButton>
				<ClearButton onClick={() => onSearchClearClicked()}>
					<TextStyle11>Clear</TextStyle11>
				</ClearButton>
			</BottomButtonWrapper>
		</Wrapper>
	);
}

SearchFilters.propTypes = {
	show: PropTypes.bool,
	children: PropTypes.array,
	onSearchFilterClose: PropTypes.func,
	onSearchButtonClicked: PropTypes.func,
	onSearchClearClicked: PropTypes.func,
	searchButtonDisabled: PropTypes.bool
};

SearchFilters.defaultProps = {
	showCloseButton: true
};
