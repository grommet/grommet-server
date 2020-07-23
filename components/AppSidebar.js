import React from 'react';
import Link from 'next/link';

import { Avatar, Button, Nav, ResponsiveContext, Sidebar } from 'grommet';
import {
  Chat,
  Console,
  Clock,
  Configure,
  Flows,
  Help,
  HomeOption,
  Projects,
  Time,
} from 'grommet-icons';

const SidebarHeader = () => (
  <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
);

const SidebarFooter = () => (
  <Nav>
    <Button icon={<Chat />} a11yTitle="chat" />
    <Button icon={<Help />} a11yTitle="support" />
  </Nav>
);

const MainNavigation = () => (
  <Nav gap="medium">
    <Link key="home" href="./">
      <Button icon={<HomeOption />} hoverIndicator />
    </Link>
    <Button icon={<Clock />} hoverIndicator />
    <Link key="manage" href="manage">
      <Button icon={<Projects />} hoverIndicator />
    </Link>
    <Button icon={<Flows />} hoverIndicator />
    <Button icon={<Time />} hoverIndicator />
    <Button icon={<Console />} hoverIndicator />
    <Button icon={<Configure />} hoverIndicator />
  </Nav>
);

export const AppSidebar = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Sidebar
      /* Sidebar should switch from column to row orientation 
      when on smaller screens */
      /* Only display most critical navigation items in mobile 
      contexts */
      header={<SidebarHeader />}
      /* Min height is not needed in mobile contexts */
      //   width={{ min: "xsmall" }}
      footer={<SidebarFooter />}
      background="blue"
      flex={false}
      height={size !== 'small' ? { min: '100%' } : undefined}
      pad={{
        top: 'medium',
        bottom: 'medium',
        // removed pad complexity
        horizontal: 'small',
      }}
      align="center"
    >
      <MainNavigation />
    </Sidebar>
  );
};
