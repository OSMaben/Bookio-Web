import React, { useState,useEffect } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import CustomHeader from './CustomHeader'
import axios from 'axios';




export default function CustomersTable() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        console.log('Fetched data:', response.data);
        setCustomers(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Failed to load customers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(new Set(customers.map(c => c.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (customerId, checked) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(customerId);
    } else {
      newSelected.delete(customerId);
    }
    setSelectedRows(newSelected);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-center items-center h-40">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-center items-center h-40">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow mt-10">
      <div className="overflow-x-auto">
        <CustomHeader/>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader 
            onSelectAll={handleSelectAll}
            allSelected={selectedRows.size === customers.length}
          />
          <tbody className="divide-y divide-gray-200">
          {displayedCustomers && displayedCustomers.length > 0 ? (
              displayedCustomers.map((customer) => (
                <TableRow
                  key={customer.id}
                  customer={customer}
                  selected={selectedRows.has(customer.id)}
                  onSelect={(checked) => handleSelectRow(customer.id, checked)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
