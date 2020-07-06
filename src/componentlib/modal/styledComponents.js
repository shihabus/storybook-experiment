import styled from "styled-components";

const ModalBanner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
`;
const ModalBannerDivs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 1.25rem 0px;
`;
const ModalCloseDiv = styled.div`
	cursor: pointer;
	position: absolute;
	padding: 0.4rem 0;
	right: -20px;
	top: -20px;
`;

const ModalWrapper = styled.div`
	&.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.6);
		.modal-main {
			position: fixed;
			background: white;
			width: 25%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 1rem;
			border-radius: 10px;
		}
		&.display-block {
			display: block;
		}
		&.display-none {
			display: none;
		}
	}
`;

const ModalContent = styled.div`
	font-size: 1.5rem;
	text-align: center;
`;

const ModalButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;

export {
	ModalBanner,
	ModalBannerDivs,
	ModalCloseDiv,
	ModalWrapper,
	ModalContent,
	ModalButtonContainer
};
