import React, { useState } from "react";
import {
  Search,
  Star,
  MapPin,
  Building2,
  Briefcase,
} from "lucide-react";
import Sidebar from "../Sidebar"; // adjust path if needed

export default function VendorsManagement() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedRating, setS