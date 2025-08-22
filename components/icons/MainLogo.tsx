
import React from 'react';

export const MainLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(50,50) scale(0.9)">
      <circle cx="0" cy="0" r="12" fill="white" />
      <path d="M 0,-50 a 50,50 0 0,1 0,100 a 50,50 0 0,1 0,-100" fill="none" stroke="white" strokeWidth="10" />
      <path d="M 0,-30 a 30,30 0 0,1 0,60 a 30,30 0 0,1 0,-60" fill="none" stroke="white" strokeWidth="8" />
      <g transform="rotate(45)">
        <path d="M 0,-40 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80" fill="none" stroke="white" strokeWidth="9" />
      </g>
      <g transform="rotate(-45)">
        <path d="M 0,-40 a 40,40 0 0,1 0,80 a 40,40 0 0,1 0,-80" fill="none" stroke="white" strokeWidth="9" />
      </g>
    </g>
  </svg>
);
