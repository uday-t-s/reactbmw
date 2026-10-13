import React from "react";

// an original circular badge in the spirit of a car roundel - not a copy of any
// manufacturer's registered logo
export default function RoundelBadge() {
  return (
    <svg viewBox="0 0 40 40" className="roundel-badge" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="#0a1a33" stroke="#fff" strokeWidth="1.5" />
      <path d="M20 2 A18 18 0 0 1 38 20 L20 20 Z" fill="#3b74ff" />
      <path d="M20 38 A18 18 0 0 1 2 20 L20 20 Z" fill="#3b74ff" />
    </svg>
  );
}
