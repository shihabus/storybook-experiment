import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TabButton } from "../index";

const TabsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 54px;
	align-items: center;
`;

const TabsContainer = ({ tabs, onTabClicked, activeTab }) => {
	return (
		<TabsWrapper>
			{tabs.map((x, i) => (
				<TabButton
					key={i}
					tabClickHandler={() => onTabClicked(x)}
					tab={x}
					selected={
						activeTab == null ? false : activeTab.value === x.value
					}
				/>
			))}
		</TabsWrapper>
	);
};
TabsContainer.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
	onTabClicked: PropTypes.func.isRequired,
	activeTab: PropTypes.object
};

export { TabsContainer };
