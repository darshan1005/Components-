import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, CheckboxProps } from "./Checkbox";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Input/CheckBox",
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
}as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: JSX.IntrinsicAttributes & CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return <Checkbox {...args} checked={checked} onChange={setChecked}></Checkbox>
}

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
};