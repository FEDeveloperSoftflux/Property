import React from "react";
import VendorCard from "./VendorCard";

export default function SearchView({ searchTerm }) {
  const searchVendors = [
    {
      id: "B002",
      name: "Elite Electrical Services",
      address: "456 Oak Avenue, New York, Midtown",
      price: "85.00",
      rating: 4.8,
      reviewCount: 62,
      description:
        "Professional electrical contractors specializing in commercial and industrial projects.",
      expertise: ["Electrical", "Wiring", "Maintenance"],
      status: "Available",
    },
    {
      id: "B003",
      name: "Metro HVAC Solutions",
      address: "789 Pine Street, New York, Brooklyn",
      price: "90.00",
      rating: 4.6,
      reviewCount: 48,
      description:
        "Full-service HVAC company providing installation, repair, and maintenance services.",
      expertise: ["HVAC", "Air Conditioning", "Heating"],
      status: "Available",
    },
    {
      id: "B004",
      name: "Supreme Contractors",
      address: "321 Elm Drive, New York, Queens",
      price: "120.00",
      rating: 4.7,
      reviewCount: 73,
      description:
        "General contracting services for residential and commercial construction projects.",
      expertise: ["Construction", "Renovation", "Project Management"],
      status: "Available",
    },
    {
      id: "B005",
      name: "Perfect Painting Co.",
      address: "654 Maple Lane, New York, Staten Island",
      price: "65.00",
      rating: 4.4,
      reviewCount: 35,
      description:
        "Professional painting services for interior and exterior residential and commercial spaces.",
      expertise: ["Painting", "Surface Preparation", "Color Consultation"],
      status: "Available",
    },
  ];

  const filteredVendors = searchVendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-white overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}
