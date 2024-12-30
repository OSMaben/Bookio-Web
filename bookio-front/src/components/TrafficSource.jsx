import React from 'react';
import { Laptop, Tablet, Phone } from 'lucide-react';

const TrafficSource = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Traffic source</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <Laptop className="w-5 h-5 mr-2 text-indigo-500" />
            <span className="text-sm font-semibold">Desktop</span>
          </div>
          <span className="text-sm font-semibold">64%</span>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <Tablet className="w-5 h-5 mr-2 text-emerald-500" />
            <span className="text-sm font-semibold">Tablet</span>
          </div>
          <span className="text-sm font-semibold">15%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-orange-500" />
            <span className="text-sm font-semibold">Phone</span>
          </div>
          <span className="text-sm font-semibold">21%</span>
        </div>
        <div className="flex h-4 mt-4 overflow-hidden rounded-full">
          <div className="w-[64%] bg-indigo-500" />
          <div className="w-[15%] bg-emerald-500" />
          <div className="w-[21%] bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default TrafficSource;