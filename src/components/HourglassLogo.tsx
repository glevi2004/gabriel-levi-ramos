"use client";

import Link from "next/link";
import React from "react";

interface HourglassLogoProps {
  className?: string;
  size?: number;
}

export default function HourglassLogo({
  className = "",
  size = 56,
}: HourglassLogoProps) {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="text-3xl flex items-center justify-center w-15 h-15 rounded-full bg-primary/10 border border-primary/20">
          ⏳
        </div>
      </div>
    </div>
  );
}
