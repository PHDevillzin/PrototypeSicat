
import React from 'react';

export const SesiSenaiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="150" height="40" fill="#8B0000" />
    <rect x="2" y="2" width="71" height="36" fill="white" />
    <rect x="77" y="2" width="71" height="36" fill="white" />
    <text x="37.5" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#8B0000" textAnchor="middle">
      SESI
    </text>
    <text x="112.5" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#8B0000" textAnchor="middle">
      SENAI
    </text>
  </svg>
);
