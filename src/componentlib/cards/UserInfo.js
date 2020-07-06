import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { TextStyle2, TextStyle21 } from "../textStyles";
import { colors } from "../configs";
import { DropdownMenu } from "../dropdowns";
import { flexBoxUtil } from "../utlis";

const UserInfoCardWrapper = styled.div`
	width: max-content;
	height: max-content;
	background: ${props => props.cardBgColor};
	padding: ${props => props.cardPadding};
	position: relative;
	${flexBoxUtil("row", "space-between", "center")}
`;

const UserInfoContent = styled.div`
	${flexBoxUtil("column", "center", "flex-end")}
	margin: 0px 8px;
	flex: 1;
`;

const DropDownDiv = styled.div`
	${flexBoxUtil("", "center", "center")}
	cursor: pointer;
`;

const UserInfoCard = props => {
	const {
		userName,
		onLogOutClicked,
		userMobileNumber,
		iconSize,
		iconColor,
		arrowColor,
		arrowSize,
		dropDownContent
	} = props;
	const [showMenu, setShowMenu] = useState(false);

	const showMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	return (
		<UserInfoCardWrapper {...props}>
			<UserInfoContent>
				<TextStyle21 style={{ margin: "0" }}>{userName}</TextStyle21>
				<TextStyle2 style={{ whiteSpace: "nowrap", margin: "0" }}>
					Mobile: {userMobileNumber}
				</TextStyle2>
			</UserInfoContent>
			<FaUserCircle
				style={{
					margin: "0px 2px",
					fontSize: `${iconSize}`,
					color: `${iconColor}`
				}}
			/>
			<DropDownDiv onClick={() => showMenuHandler()}>
				{showMenu ? (
					<GoChevronUp
						style={{
							fontSize: `${arrowSize}`,
							color: `${arrowColor}`
						}}
					/>
				) : (
					<GoChevronDown
						style={{
							fontSize: `${arrowSize}`,
							color: `${arrowColor}`
						}}
					/>
				)}
			</DropDownDiv>
			{showMenu && (
				<DropdownMenu
					dropDownContent={dropDownContent}
					menuOptions={[
						{
							label: "Log out",
							onClick: () => {
								onLogOutClicked();
							}
						}
					]}
					handleHideMenu={() => showMenuHandler()}
				/>
			)}
		</UserInfoCardWrapper>
	);
};

UserInfoCard.propTypes = {
	userName: PropTypes.string,
	userMobileNumber: PropTypes.string || PropTypes.number,
	onLogOutClicked: PropTypes.func,
	cardBgColor: PropTypes.string,
	cardPadding: PropTypes.string,
	iconSize: PropTypes.string,
	iconColor: PropTypes.string,
	arrowColor: PropTypes.string,
	arrowSize: PropTypes.string,
	dropDownContent: PropTypes.element
};

UserInfoCard.defaultProps = {
	cardBgColor: colors.transparent,
	onLogOutClicked: () => {},
	cardPadding: ".25%",
	userName: "Tony",
	userMobileNumber: "9945223316",
	iconSize: "40px",
	iconColor: colors.greyishBrown,
	arrowColor: colors.brown_grey,
	arrowSize: "25px",
	dropDownContent: (
		<>
			<TextStyle21 style={{ margin: "1px 0px" }}>
				Agent ID: 60078
			</TextStyle21>
			<TextStyle21 style={{ margin: "1px 0px" }}>Cluster: 08</TextStyle21>
			<TextStyle21 style={{ margin: "1px 0px" }}>
				Role: Cluster Manager
			</TextStyle21>
		</>
	)
};

export { UserInfoCard };
