import { configure, addDecorator, setAddon } from "@storybook/react";
import requireContext from "require-context.macro";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import "../src/componentlib/index.css";
const req = requireContext(
  "../src/componentlib",
  true,
  /\.stories\.js$/
);

addDecorator(withKnobs);
configure(req, module);
