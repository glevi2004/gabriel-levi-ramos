"use client";

import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

interface GitHubCalendarProps {
  username: string;
}

export default function GitHubCalendarComponent({
  username,
}: GitHubCalendarProps) {
  const [selectedYear, setSelectedYear] = useState<"2025" | "2024" | "all">(
    "all"
  );

  const getYearProps = () => {
    if (selectedYear === "all") {
      return {};
    }
    return { year: parseInt(selectedYear) };
  };

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-foreground">GitHub Activity</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedYear("2025")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === "2025"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            2025
          </button>
          <button
            onClick={() => setSelectedYear("2024")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === "2024"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            2024
          </button>
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === "all"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
        <div className="overflow-x-auto">
          <GitHubCalendar username={username} {...getYearProps()} />
        </div>
      </div>
    </div>
  );
}
