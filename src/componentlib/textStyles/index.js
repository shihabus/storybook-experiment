// TextStyles

import styled from "styled-components";
import { colors, fonts } from "../configs";
import PropTypes from "prop-types";

const fontStyleSetter = ({
	color,
	fontSize,
	fontFamily,
	fontWeight,
	fontStyle,
	fontStretch,
	letterSpacing
}) => {
	return `
    color:${color};
    font-size:${fontSize};
    font-family: ${fontFamily || "Roboto"};
    font-weight: ${fontWeight || "normal"};
    font-style: ${fontStyle || "normal"};
    font-stretch: ${fontStretch || "normal"};
    letter-spacing: ${letterSpacing || "normal"};
  `;
};

const isHoverable = props => `
cursor: ${props.isHoverable ? "pointer" : "default"};
&:hover {
  color: ${props.isHoverable ? colors.brown_grey_two_70 : ""};
}
`;

const ellipse = props => `
  ${props.ellipse &&
		`overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 98%;`}
`;

// style factory
const baseStyle = styled.p`
	${isHoverable};
	${ellipse};
`;

export const TextStyle = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.default,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.default}`,
	fontFamily: "Roboto",
	fontWeight: "normal",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};
TextStyle.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};

export const TextStyle2 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle2.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle2.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle3 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.colorBlackTwo,
			fontSize: fontSize || fonts.sizes.large,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	${isHoverable};
	${ellipse};
	margin: ${props => (props.margin ? props.margin : "10px 0")};
	span {
		overflow-wrap: break-word;
	}
`;
TextStyle3.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle3.defaultProps = {
	color: `${colors.colorBlackTwo}`,
	fontSize: `${fonts.sizes.large}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle4 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.colorBlackTwo,
			fontSize: fontSize || fonts.sizes.xxsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;

TextStyle4.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};

TextStyle4.defaultProps = {
	color: `${colors.colorBlackTwo}`,
	fontSize: `${fonts.sizes.xxsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle5 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.white,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle5.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle5.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle6 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.rich_blue,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontStyle,
			fontFamily,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle6.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle5.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle7 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	opacity: ${props => (props.opacity ? props.opacity : "1")};
`;
TextStyle7.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle5.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle8 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.xxlarge,
			fontWeight: fontWeight || 500,
			fontStyle,
			fontFamily,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle8.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle5.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle9 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontStyle,
			fontFamily,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle9.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle9.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle10 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.colorBlackTwo,
			fontSize: fontSize || fonts.sizes.large,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle10.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle10.defaultProps = {
	color: `${colors.colorBlackTwo}`,
	fontSize: `${fonts.sizes.large}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle11 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.white,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	text-align: center;
`;
TextStyle11.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle11.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle12 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.black,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	text-align: center;
`;
TextStyle12.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle12.defaultProps = {
	color: `${colors.black}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle13 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.black,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle13.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle13.defaultProps = {
	color: `${colors.black}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle14 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle14.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle14.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle15 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.black,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle15.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontFamily: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle15.defaultProps = {
	color: `${colors.black}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle16 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.white,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle16.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle16.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle17 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	text-align: left;
`;
TextStyle17.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle17.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle18 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle18.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle18.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle19 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle19.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle19.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle20 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 400,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle20.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.number,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle20.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "400",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle21 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.brownish_grey_three,
			fontSize: fontSize || fonts.sizes.small,
			fontWeight: fontWeight || 400,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle21.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle21.defaultProps = {
	color: `${colors.brownish_grey_three}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "400",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle22 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 400,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle22.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle22.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "400",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle23 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.slate_grey,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 400,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle23.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle23.defaultProps = {
	color: `${colors.slate_grey}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "400",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle24 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.very_light_pink_three,
			fontSize: fontSize || fonts.sizes.default,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle24.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle24.defaultProps = {
	color: `${colors.very_light_pink_three}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle25 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blueberry,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	text-align: center;
`;
TextStyle25.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle25.defaultProps = {
	color: `${colors.blueberry}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle26 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.white,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle26.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle26.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle27 = styled(baseStyle)`
	line-height: normal;
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.xxsmall,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	text-align: left;
`;
TextStyle27.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle27.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.xxsmall}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle28 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.xxlarge,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	letter-spacing: normal;
	line-height: 1.3;
	text-align: left;
`;
TextStyle28.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle28.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.xxlarge}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle29 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || "24px",
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	letter-spacing: normal;
	text-align: left;
`;
TextStyle29.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle29.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `24px`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle30 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.slate_grey,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontWeight: fontWeight || 500,
			fontFamily,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
`;
TextStyle30.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle30.defaultProps = {
	color: `${colors.slate_grey}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "500",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal"
};

export const TextStyle31 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.blackTwo,
			fontSize: fontSize || fonts.sizes.small,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	line-height: normal;
	text-align: left;
`;
TextStyle31.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle31.defaultProps = {
	color: `${colors.blackTwo}`,
	fontSize: `${fonts.sizes.small}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal",
	lineHeight: "normal",
	textAlign: "left"
};

export const TextStyle32 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.warmGrey,
			fontSize: fontSize || fonts.sizes.default,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	line-height: normal;
	text-align: left;
`;
TextStyle32.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle32.defaultProps = {
	color: `${colors.warmGrey}`,
	fontSize: `${fonts.sizes.default}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal",
	lineHeight: "normal",
	textAlign: "left"
};

export const TextStyle33 = styled(baseStyle)`
	${({
		color,
		fontSize,
		fontFamily,
		fontWeight,
		fontStyle,
		fontStretch,
		letterSpacing
	}) =>
		fontStyleSetter({
			color: color || colors.white,
			fontSize: fontSize || fonts.sizes.xsmall,
			fontFamily,
			fontWeight,
			fontStyle,
			fontStretch,
			letterSpacing
		})};
	line-height: 1.33;
	text-align: left;
`;
TextStyle33.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.number,
	fontFamily: PropTypes.string,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	fontStretch: PropTypes.string,
	letterSpacing: PropTypes.string
};
TextStyle33.defaultProps = {
	color: `${colors.white}`,
	fontSize: `${fonts.sizes.xsmall}`,
	fontWeight: "normal",
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontStretch: "normal",
	letterSpacing: "normal",
	lineHeight: 1.33,
	textAlign: "left"
};
