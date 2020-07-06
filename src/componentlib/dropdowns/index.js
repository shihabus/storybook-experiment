import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownMenuWrapper = styled.div`
	position: absolute;
	right: ${props => props.right};
	top: ${props => props.top};
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	transition: max-height 1s ease-in-out;
`;

const LinkButton = styled.div`
	color: black;
	padding: 12px 14px;
	text-decoration: none;
	display: block;
	font-size: 14px;
	&:hover {
		background: #e2e4e6;
		font-size: 16px;
	}
`;

const ContentDiv = styled.div`
	padding: 12px 14px;
`;

export const DropdownMenu = props => {
	const { menuOptions, handleHideMenu, dropDownContent } = props;
	const node = useRef();
	const handleClickOutside = e => {
		if (node.current && node.current.contains(e.target)) {
			return;
		}
		handleHideMenu();
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<DropdownMenuWrapper ref={node} {...props}>
			{dropDownContent && <ContentDiv>{dropDownContent}</ContentDiv>}
			{menuOptions.map((option, index) => (
				<LinkButton
					key={index}
					onClick={() => (option.onClick ? option.onClick() : {})}
					role="button"
				>
					{option.label}
				</LinkButton>
			))}
		</DropdownMenuWrapper>
	);
};

DropdownMenu.propTypes = {
	menuOptions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			onClick: PropTypes.func
		})
	),
	handleHideMenu: PropTypes.func,
	right: PropTypes.number,
	top: PropTypes.number
};

DropdownMenu.defaultProps = {
	right: "0",
	top: "100%"
};
