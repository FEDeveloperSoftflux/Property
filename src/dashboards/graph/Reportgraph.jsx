import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Filter, ChevronDown } from "lucide-react";

// Demo Data
const initialData = [
  { month: "Jan", date: "2025-01-15", value: 10, earnings: "$25,000" },
  { month: "Feb", date: "2025-02-15", value: 14, earnings: "$32,000" },
  { month: "Mar", date: "2025-03-15", value: 18, earnings: "$45,000" },
  { month: "Apr", date: "2025-04-15", value: 16, earnings: "$28,000" },
  { month: "May", date: "2025-05-15", value: 21, earnings: "$40,000" },
  { month: "Jun", date: "2025-06-15", value: 25, earnings: "$50,000" },
];

// ✅ Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { month, date, earnings, value } = payload[0].payload;

    return (
      <div className="bg-white border rounded shadow px-3 py-2 text-sm">
        <p className="font-semibold text-gray-800">{month}</p>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Earnings: {earnings}</p>
        <p className="text-gray-600">Projects: {value}</p>
      </div>
    );
  }
  return null;
};

// ✅ Custom Label
const CustomLabel = ({ x, y, index }) => {
  if (initialData[index].month === "Mar") {
    return (
      <text x={x} y={y - 10} textAnchor="middle" fill="#000000" fontSize="12">
        {initialData[index].earnings}
      </text>
    );
  }
  return null;
};

export default function Reportgraph() {
  const [vendor, setVendor] = useState("All Vendor");
  const [date, setDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-neutral-50 rounded-3xl shadow-sm mt-5 w-full">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-4 pt-5 px-3">
        <div>
          <h1 className="text-lg font-semibold">Performance Progress</h1>
          <p className="text-gray-500 text-sm">
            Monthly completed projects and earnings overview
          </p>
        </div>

        {/* 🔹 Mobile Filter Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 text-sm text-custom-blue border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
          >
            <Filter className="w-4 h-4 mr-2 text-custom-blue" />
            {showFilters ? "Hide Filters" : "Show Filters"}
            <ChevronDown
              className={`w-4 h-4 ml-2 text-custom-blue transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* 🔹 Filters Section */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } px-3 pb-4 lg:flex lg:items-center lg:justify-end lg:gap-3`}
      >
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Vendor Filter */}
          <select
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-neutral-50 w-full lg:w-auto"
          >
            <option>All Vendor</option>
            <option>Vendor A</option>
            <option>Vendor B</option>
            <option>Vendor C</option>
          </select>

          {/* Date Filter */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-neutral-50 w-full lg:w-auto"
          />
        </div>
      </div>

      {/* 🔹 Chart */}
      <ResponsiveContainer width="100%" height={397}>
        <LineChart data={initialData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#385A9C"
            strokeWidth={3}
            dot={{ r: 5, fill: "#385A9C" }}
            activeDot={{ r: 8 }}
          >
            <LabelList content={<CustomLabel />} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
