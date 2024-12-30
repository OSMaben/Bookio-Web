import React, { useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';

export default function TableRow({ customer, selected, onSelect }) {
  console.log('TableRow received customer:', customer);

  if (!customer) {
    return null;
  }

  const defaultAvatar = "/api/placeholder/40/40";

  
    const hanldeDelete = async (id) => {

        try {
          const response = await axios.delete(`http://localhost:3000/books/${id}`);
          console.log(response);
        } catch (err) {
          console.log("there was an error", err);
        }
    }

  

  return (
    <tr className={selected ? 'bg-gray-50' : 'bg-white'}>
      <td className="w-12 px-6 py-4">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={customer.imageUrl?.S || defaultAvatar}
              alt={`${customer.title?.S} avatar`}
              onError={(e) => {
                e.target.src = defaultAvatar;
              }}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{customer.auther?.S}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.price?.S}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.description?.S}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.borrowd?.S}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex justify-center space-x-2">
          <button

            className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            onClick={()=> hanldeDelete(customer.id?.S)}
            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-100 rounded"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}