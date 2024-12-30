import React from 'react';

const SalesChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = [17, 15, 5, 8, 4, 14, 14, 16, 18, 17, 19, 13];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Sales</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Sync
          </span>
        </button>
      </div>
      <div className="h-64 flex items-end space-x-2">
        {values.map((value, index) => (
          <div key={months[index]} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-indigo-500 rounded-t"
              style={{ height: `${(value/20) * 100}%` }}
            />
            <span className="text-xs text-gray-500 mt-2">{months[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;