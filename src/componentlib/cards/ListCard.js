import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
	TextStyle10,
	TextStyle20,
	TextStyle2,
	TextStyle3,
	TextStyle15
} from "../textStyles";
import { colors, spacings } from "../configs";
import { RoundIcon, StatusLabel, AssignRoundIcon } from "../index";
import { IoMdPerson } from "react-icons/io";

const ListCardWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 100px;
	margin: ${props => props.cardMargin};
	background: ${props => (props.isSelected ? colors.paleGrey : colors.white)};
	border: 1px solid ${colors.border_grey};

	&:hover {
		background: ${colors.paleGrey};
	}
`;

ListCardWrapper.defaultProps = {
	cardMargin: "0",
	isSelected: false
};

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const BikeCardWrapper = styled.div`
	height: 130px;
	border: solid ${spacings.xxsmall} ${colors.border_grey};
	display: flex;
	background-color: ${props =>
		props.isSelected ? colors.paleGrey : colors.white};
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
	cursor: pointer;
	&:hover {
		background-color: ${colors.off_white};
	}
`;

const BikeDetailsContainer = styled.div`
	grid-template-rows: 1fr 30%;
	height: 100%;
	width: 250px;
	display: grid;
	grid-template-columns: 60% 40%;
	grid-template-areas:
		"header-box label"
		"header-box address";
	flex: 1;
	overflow: hidden;
	margin-left: 1em;
`;

const HeaderBox = styled.div`
	grid-area: header-box;
	display: flex;
	justify-content: ${props => props.justifyContent};
	flex-direction: column;
	overflow: hidden;
	text-overflow: ellipsis;
`;

HeaderBox.defaultProps = {
	justifyContent: "flex-start"
};

const AddressBox = styled.div`
	grid-area: address;
	align-items: flex-start;
	display: flex;
	justify-content: flex-end;
`;

const RightArrow = styled.div`
	grid-area: address;
	width: 12.3px;
	height: 12.3px;
	border: solid #979797;
	border-width: 0 2px 2px 0;
	display: flex;
	align-self: center;
	margin-right: 5px;
	transform: rotate(-45deg);
`;

const BikeDetailsWrapper = ({
	status,
	labelBg,
	licensePlate,
	modelName,
	bikeId
}) => (
	<BikeDetailsContainer>
		<HeaderBox>
			<TextStyle3 style={{ margin: "2px 0px" }}>
				{licensePlate}
			</TextStyle3>
			<TextStyle2 style={{ margin: "2px 0px", fontSize: "1em" }}>
				#{bikeId}
			</TextStyle2>
			<TextStyle2 style={{ fontSize: "1em" }}>{modelName}</TextStyle2>
		</HeaderBox>
		<StatusLabel labelText={status} labelBackground={labelBg} />
		<AddressBox>
			<RightArrow />
		</AddressBox>
	</BikeDetailsContainer>
);

const BikeCard = props => {
	const { item, labelBg, isSelected, onChangeCallback } = props;
	return (
		<BikeCardWrapper
			isSelected={isSelected}
			onClick={() => onChangeCallback(item)}
		>
			<RoundIcon bike />
			<BikeDetailsWrapper
				status={item.status}
				labelBg={labelBg}
				licensePlate={item.licensePlate}
				modelName={item.modelName}
				bikeId={item.bikeId}
			/>
		</BikeCardWrapper>
	);
};

BikeCard.defaultProps = {
	item: {
		licensePlate: "",
		isSelected: false
	}
};

const IconWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 50px;
	height: 50px;
	font-size: 30px;
	justify-content: center;
	align-items: center;
	margin: 0 16px;
	background-color: ${colors.brightLightBlue};
	border-radius: 50%;
`;

const AgentCard = props => {
	const { item, isSelected, onChangeCallback } = props;
	return (
		<ListCardWrapper
			isSelected={isSelected}
			onClick={() => onChangeCallback(item)}
		>
			<IconWrapper>
				<IoMdPerson />
			</IconWrapper>
			<ContentWrapper>
				<TextStyle10>{item.agentName}</TextStyle10>
				<br />
				<TextStyle15>Agent Type: {item.agentType}</TextStyle15>
				<TextStyle15>Team Name: {item.teamName}</TextStyle15>
			</ContentWrapper>
		</ListCardWrapper>
	);
};

AgentCard.defaultProps = {
	item: {
		agentName: ""
	}
};

const AgentTaskCard = props => {
	const { item, isSelected, onChangeCallback } = props;
	return (
		<ListCardWrapper
			isSelected={isSelected}
			onClick={() => onChangeCallback(item)}
		>
			<ContentWrapper>
				{/* <TextStyle10>{item.agentId}</TextStyle10> */}
				<TextStyle20>Task ID: {item.taskId}</TextStyle20>
				<TextStyle20>License Plate: {item.licensePlate}</TextStyle20>
				<TextStyle20>Task Type: {item.taskType}</TextStyle20>
				<TextStyle20>Task Status: {item.taskStatus}</TextStyle20>
				<TextStyle20>Geo ID: {item.geoId}</TextStyle20>
				<TextStyle20>Booking ID: {item.bookingId}</TextStyle20>
				<TextStyle20>Entity Type: {item.entityType}</TextStyle20>
			</ContentWrapper>
		</ListCardWrapper>
	);
};

AgentTaskCard.defaultProps = {
	item: {
		taskId: "",
		licensePlate: "",
		taskType: "",
		taskStatus: "",
		geoId: "",
		bookingId: "",
		entityType: ""
	}
};

const TaskCardWrapper = styled.div`
	height: 130px;
	border: solid ${spacings.xxsmall} ${colors.border_grey};
	display: flex;
	background-color: ${props =>
		props.isSelected ? colors.paleGrey : colors.white};
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
	cursor: pointer;
	&:hover {
		background-color: ${colors.off_white};
	}
`;

const TaskDetailsContainer = styled.div`
	// background: aquamarine;
	grid-template-rows: 1fr 30%;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 70% 30%;
	grid-template-areas:
		"header-box label"
		"header-box address";
	flex: 1;
	overflow: hidden;
`;

const TaskDetailsWrapper = ({
	numberPlate,
	taskText,
	address,
	status,
	taskId,
	createdOn
}) => (
	<TaskDetailsContainer>
		<HeaderBox justifyContent="space-around">
			<TextStyle2 style={{ margin: "2px 0px" }}>#{taskId}</TextStyle2>
			<TextStyle3 style={{ margin: "2px 0px" }}>{numberPlate}</TextStyle3>
			<TextStyle3 style={{ margin: "2px 0px" }} ellipse>
				Task: {taskText}
			</TextStyle3>
			<TextStyle2 ellipse>
				Created on:{" "}
				{new Date(createdOn).toLocaleString("en-IN", { hour12: true })}
			</TextStyle2>
		</HeaderBox>
		<StatusLabel labelText={status} />
		<AddressBox>
			<TextStyle2 ellipse>{address}</TextStyle2>
			<RightArrow />
		</AddressBox>
	</TaskDetailsContainer>
);

export const TaskCard = ({ item, onChangeCallback, isSelected = false }) => (
	<TaskCardWrapper
		onClick={() => onChangeCallback(item)}
		isSelected={isSelected}
	>
		<RoundIcon
			iconText={item.agent !== null ? item.agent.agentName : "--"}
			bike
		/>
		<TaskDetailsWrapper
			status={item.taskStatus.status}
			numberPlate={item.licensePlate}
			taskText={
				item.taskCategory.taskTypeDisplayName &&
				item.taskCategory.taskTypeDisplayName.length !== 0
					? item.taskCategory.taskTypeDisplayName
					: item.taskCategory.taskType
			}
			taskId={item.taskId}
			address=""
			createdOn={item.createdOn}
		/>
	</TaskCardWrapper>
);

TaskCard.propTypes = {
	item: PropTypes.object,
	onChangeCallback: PropTypes.func,
	isSelected: PropTypes.bool
};

export const UnassignedTaskCard = ({
	item,
	onChangeCallback,
	isSelected = false
}) => (
	<TaskCardWrapper
		onClick={() => onChangeCallback(item)}
		isSelected={isSelected}
	>
		<AssignRoundIcon />
		<TaskDetailsWrapper
			status="unassigned"
			numberPlate={item.licensePlate}
			taskText={
				item.taskCategory.taskTypeDisplayName &&
				item.taskCategory.taskTypeDisplayName.length !== 0
					? item.taskCategory.taskTypeDisplayName
					: item.taskCategory.taskType
			}
			taskId={item.taskId}
			address=""
			createdOn={item.createdOn}
		/>
	</TaskCardWrapper>
);

const HubDetailsWrapper = ({ id, name, status, address }) => (
	<BikeDetailsContainer>
		<HeaderBox>
			<TextStyle3 style={{ margin: "2px 0px" }}>{name}</TextStyle3>
			<TextStyle2 style={{ margin: "2px 0px", fontSize: "1em" }}>
				#{id}
			</TextStyle2>
			<TextStyle2 style={{ fontSize: "1em" }}>{address}</TextStyle2>
		</HeaderBox>
		<StatusLabel labelText={status ? "online" : "offline"} />
		<AddressBox>
			<RightArrow />
		</AddressBox>
	</BikeDetailsContainer>
);

const HubCard = props => {
	const { item, isSelected, onChangeCallback } = props;
	return (
		<BikeCardWrapper
			isSelected={isSelected}
			onClick={() => onChangeCallback(item)}
		>
			<RoundIcon hub />
			<HubDetailsWrapper
				id={item.id}
				name={item.name}
				status={item.isOnline}
				address={item.address}
			/>
		</BikeCardWrapper>
	);
};

BikeCard.defaultProps = {
	item: {
		licensePlate: "",
		isSelected: false
	}
};

export { BikeCard, AgentCard, AgentTaskCard, HubCard };
