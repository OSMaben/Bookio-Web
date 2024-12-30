import React from 'react';

export default function CustomHeader() {
  return (
    <div className="flex justify-between items-center mb-6 mt-8 mr-4">
      <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
      <div className="flex space-x-4">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Import
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Export
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Add
        </button>
      </div>
    </div>
  );
}