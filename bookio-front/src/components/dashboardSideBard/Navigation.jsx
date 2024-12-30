import React from 'react';
import { LayoutDashboard, Users, Settings, HelpCircle, AlertCircle } from 'lucide-react';
import NavItem from './NavItem';

export default function Navigation(){
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', isActive: true },
    { icon: Users, label: 'Customers' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Account' },
    { icon: AlertCircle, label: 'Error' }
  ];

  return (
    <nav className="mt-4">
      <ul>
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
};