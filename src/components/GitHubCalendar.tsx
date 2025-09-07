"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

interface GitHubCalendarProps {
  username: string;
}

export default function GitHubCalendarComponent({
  username,
}: GitHubCalendarProps) {
  const { theme } = useTheme();
  const [selectedYear, setSelectedYear] = useState<"2025" | "2024" | "all">(
    "all"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isYearLoading, setIsYearLoading] = useState(false);

  const getYearProps = () => {
    if (selectedYear === "all") {
      return {};
    }
    return { year: parseInt(selectedYear) };
  };

  const handleYearChange = (year: "2025" | "2024" | "all") => {
    setIsYearLoading(true);
    setSelectedYear(year);
    // Brief delay to show loading state during year transition
    setIsYearLoading(false);
    // setTimeout(() => {
    //   setIsYearLoading(false);
    // }, 800);
  };

  // Show loading for a brief moment to simulate calendar loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mb-6 ">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">GitHub Activity</h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleYearChange("2025")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === "2025"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            2025
          </button>
          <button
            onClick={() => handleYearChange("2024")}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === "2024"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            2024
          </button>
          <button
            onClick={() => handleYearChange("all")}
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
        {(isLoading || isYearLoading) && (
          <div className="animate-pulse">
            <div className="grid grid-cols-53 gap-1 mb-2">
              {Array.from({ length: 53 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-muted rounded opacity-60"
                  style={{
                    opacity: 0.1 + (i % 5) * 0.1,
                  }}
                ></div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Less</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-muted rounded"
                    style={{
                      opacity: (i + 1) * 0.2,
                    }}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        )}
        <div
          className={`overflow-x-auto ${
            isLoading || isYearLoading ? "hidden" : "block"
          }`}
        >
          <GitHubCalendar
            username={username}
            {...getYearProps()}
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
    </div>
  );
}
