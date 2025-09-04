import React from "react";
import { FolderOpen, AlertTriangle, Check } from "lucide-react";
import StatsCard from "../../src/dashboards/statscard";

export default function AssetsStats({ assetsData }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard
        title="Total Assets"
        value={assetsData.length}
        icon={FolderOpen}
      />
      <StatsCard
        title="Needs Attention"
        value={assetsData.filter(a => a.status.toLowerCase() === "needs attention").length}
        icon={AlertTriangle}
      />
      <StatsCard
        title="Good Condition"
        value={assetsData.filter(a => a.status.toLowerCase() === "good").length}
        icon={Check}
      />
      <StatsCard
        title="Fair Condition"
        value={assetsData.filter(a => a.status.toLowerCase() === "fair").length}
        icon={() => (
          <div className="rounded-full bg-custom-blue w-7 h-7 flex items-center justify-center text-white text-lg">
            !
          </div>
        )}
      />
    </div>
  );
}
