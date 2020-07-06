import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosSearch, IoIosAdd } from "react-icons/io";
import { TextStyle11, TextStyle3 } from "../textStyles";
import { colors } from "../configs";

const Search = styled.div`
	background: ${colors.blueberry};
	height: 4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
`;
const SearchDivs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const IconDiv = styled.div`
	padding: 10px;
	cursor: pointer;
`;

const FilterCountDiv = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	color: white;
`;

export function SearchBar({
	label,
	showCreateButton,
	onSearchClicked,
	onCreateButtonClicked,
	filterCount
}) {
	return (
		<Search>
			<SearchDivs>
				<TextStyle11>{label}</TextStyle11>
			</SearchDivs>
			<SearchDivs>
				{showCreateButton && (
					<IconDiv onClick={() => onCreateButtonClicked()}>
						<IoIosAdd
							style={{ color: "white", fontSize: "30px" }}
						/>
					</IconDiv>
				)}
				<IconDiv onClick={() => onSearchClicked()}>
					<IoIosSearch style={{ color: "white", fontSize: "25px" }} />
					<FilterCountDiv>
						<FilterCountDiv>
							{filterCount === 0 ? "" : filterCount}
						</FilterCountDiv>
					</FilterCountDiv>
				</IconDiv>
			</SearchDivs>
		</Search>
	);
}

SearchBar.propTypes = {
	label: PropTypes.string,
	filterCount: PropTypes.number,
	showCreateButton: PropTypes.bool,
	onSearchClicked: PropTypes.func,
	onCreateButtonClicked: PropTypes.func
};
