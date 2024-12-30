import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function WorkspaceSelector() {
  return (
    <>
      <div className="px-3 py-2">
        <button className="w-full flex items-center justify-between p-2 rounded-lg bg-gray-900 text-white">
          <span>Devias</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </>
  )
};
