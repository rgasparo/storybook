import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import { Button } from "../components/button.component";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "¡Call to action!",
};

export const Variants: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={320}>
    <Button color="primary" variant="contained" label="Contained Button" />
    <Button variant="outlined" label="Outlined Button" />
    <Button variant="text" label="Text Button" />
    <Button label="Disabled Button" disabled/>
    <Button variant="outlined" fullWidth label="fullWidth button"/>
  </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" label="Primary" />
    <Button variant="contained" color="secondary" label="Secondary" />
    <Button variant="contained" color="success" label="Success" />
    <Button variant="contained" color="error" label="Error" />
    <Button variant="contained" color="info" label="Info" />
  </Stack>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small" label="Small" />
    <Button variant="contained" size="medium" label="Medium" />
    <Button variant="contained" size="large" label="Large" />
  </Stack>
);
