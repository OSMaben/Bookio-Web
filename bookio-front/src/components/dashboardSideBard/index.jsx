import React from 'react';
import Logo from './logo';
import WorkspaceSelector from './WorkProSelector';
import Navigation from './Navigation';

const Sidebar = () => (
  <div className="flex flex-col h-screen w-64 bg-white border-r">
      <Logo />
      <WorkspaceSelector />
      <Navigation />
  </div>
);

export default Sidebar;