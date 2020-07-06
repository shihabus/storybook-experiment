import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
// import Logo from "../src/assets/logo.png";

const customTheme = create({
  base: "dark",

  colorPrimary: "#16193B",
  colorSecondary: "#5f6572",

  // UI
  appBg: "#1D2433",
  appContentBg: "#EFF3F6",
  appBorderColor: "#DFE2E5",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  //   // Text colors
  textColor: "#8591B4",
  textInverseColor: "#000",

  // Toolbar default and active colors
  barTextColor: "#354052",
  barSelectedColor: "#516173",
  barBg: "#ced9e0",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Control Center DS"
  //   brandUrl: "https://example.com"
  //   brandImage: Logo
});

addons.setConfig({
  theme: customTheme
});
