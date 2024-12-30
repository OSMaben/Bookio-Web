import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ icon: Icon, label, isActive }) => (
  <li>
    <a
      href="#"
      className={`flex items-center gap-3 px-6 py-3 text-sm ${
        isActive ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </a>
  </li>
);

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default NavItem;