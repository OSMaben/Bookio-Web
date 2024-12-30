import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ title, value, change, Icon, iconColor }) => {
  const isPositive = change.value > 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <div className="flex items-center mt-2">
            <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
            </span>
            <span className="text-sm text-gray-500 ml-1">{change.label}</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${iconColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconColor: PropTypes.string.isRequired
};

export default StatCard;