import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './dashboardSideBard/index';

import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="flex">
     <Sidebar/>
    <main className="flex-1 min-h-screen bg-gray-100">
      <Outlet /> 
    </main>
  </div>
);

export default MainLayout;
