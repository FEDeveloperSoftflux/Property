import React, { useState } from 'react';

const FilterBar = () => {
  const [selectedVendor, setSelectedVendor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="flex flex-wrap gap-4 justify-end items-center p-4 bg-white rounded-md shadow-sm">
      {/* Vendor Dropdown */}
      <select
        value={selectedVendor}
        onChange={(e) => setSelectedVendor(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Vendor</option>
        <option value="vendor1">Vendor 1</option>
        <option value="vendor2">Vendor 2</option>
        <option value="vendor3">Vendor 3</option>
      </select>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FilterBar;
