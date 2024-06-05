import { JSX } from "react/jsx-runtime";
import { Avatar, AvatarProps } from "./Avatar";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
  title: "Profiles/Avatar",
  component: Avatar,
  parameters:{
    layout: 'centered'
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args: JSX.IntrinsicAttributes & AvatarProps) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?rs=1&pid=ImgDetMain',
  alt: 'Avatar',
}