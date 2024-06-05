import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput, TextInputProps } from "./TextInput";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Input/TextInput",
  component: TextInput,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: JSX.IntrinsicAttributes & TextInputProps) => <TextInput {...args} />

export const Default = Template.bind({});
Default.args = {
  palceholder: "Enter text...",
}