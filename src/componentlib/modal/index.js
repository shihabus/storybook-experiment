import React from "react";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";
import { colors, spacing } from "../configs";
import { PrimaryButton, SecondaryButton } from "../buttons";
import {
	ModalBanner,
	ModalBannerDivs,
	ModalCloseDiv,
	ModalWrapper,
	ModalContent,
	ModalButtonContainer
} from "./styledComponents";
import { TextStyle11 } from "../textStyles";

export const ModalSmall = ({
	handleClose,
	show,
	children,
	title,
	onConfirm,
	disabled
}) => {
	const showHideClassName = show
		? "modal display-block"
		: "modal display-none";
	const buttonStyles = {
		fontSize: "1.2rem",
		paddingLeft: "2rem",
		paddingRight: "2rem",
		paddingTop: "1rem",
		paddingBottom: "1rem"
	};

	return (
		<ModalWrapper className={showHideClassName}>
			<section className="modal-main">
				<ModalBanner>
					<ModalBannerDivs>
						<TextStyle11 color={colors.blackTwo}>
							{title}
						</TextStyle11>
					</ModalBannerDivs>
					<ModalBannerDivs>
						<ModalCloseDiv onClick={handleClose}>
							<IoIosClose style={{ fontSize: "40px" }} />
						</ModalCloseDiv>
					</ModalBannerDivs>
				</ModalBanner>
				<ModalContent>{children}</ModalContent>
				<ModalButtonContainer>
					<SecondaryButton
						label="Cancel"
						{...buttonStyles}
						onClickHandler={handleClose}
					/>
					<PrimaryButton
						label="Confirm"
						{...buttonStyles}
						onClickHandler={onConfirm}
						disabled={disabled}
					/>
				</ModalButtonContainer>
			</section>
		</ModalWrapper>
	);
};

ModalSmall.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.element,
	onConfirm: PropTypes.func,
	disabled: PropTypes.bool
};
