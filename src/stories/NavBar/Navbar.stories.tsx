// src/stories/Navbar.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { NavBar } from './Navbar';

export default {
  title: 'Navigations/Navbar',
  component: NavBar,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args: any) => {

  const [loggedIn, setLoggedIn] = useState(args.loggedIn);
  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);
  return (
    <NavBar {...args}
      loggedIn={loggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  )
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  navLinks: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ],
  loggedIn: false,
  onLogin: () => { },
  onLogout: () => { },
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   navLinks: [
//     { label: 'Home', url: '/' },
//     { label: 'About', url: '/about' },
//     { label: 'Contact', url: '/contact' },
//   ],
//   loggedIn: false,
//   onLogin: () => {},
//   onLogout: () => {},
// };
