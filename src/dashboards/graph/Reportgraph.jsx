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

// Demo Data with Month + Date + Earnings
const initialData = [
  { month: "Jan", date: "2025-01-15", value: 10, earnings: "$25,000" },
  { month: "Feb", date: "2025-02-15", value: 14, earnings: "$32,000" },
  { month: "Mar", date: "2025-03-15", value: 18, earnings: "$45,000" },
  { month: "Apr", date: "2025-04-15", value: 16, earnings: "$28,000" },
  { month: "May", date: "2025-05-15", value: 21, earnings: "$40,000" },
  { month: "Jun", date: "2025-06-15", value: 25, earnings: "$50,000" },
];

// ✅ Custom Tooltip (Month + Date + Earnings)
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

// Custom Label → Only show for March
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

  return (
    <div className="bg-neutral-50 rounded-3xl shadow-sm mt-5 w-full">
      {/* 🔹 Header with filters */}
      <div className="flex justify-between items-center mb-4 pt-5">
        <div className="ml-3">
          <h1 className="text-lg font-semibold">Performance Progress</h1>
          <p className="text-gray-500 text-sm">
            Monthly completed projects and earnings overview
          </p>
        </div>

        <div className="flex gap-3">
          {/* Vendor Filter */}
          <select
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-neutral-50"
          >
            <option>All Vendor</option>
            <option>Vendor A</option>
            <option>Vendor B</option>
            <option>Vendor C</option>
          </select>

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-neutral-50 mr-4"
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
