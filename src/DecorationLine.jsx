// src/components/DecorationLine.jsx
import React from 'react';
import './DecorationLine.css'





const DecorationLine = ({ className = ''}, ref) => (
  <svg
    ref={ref}
    className={`decoration-line ${className}`}
    width="798"
    height="823"
    viewBox="0 0 798 823"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: 'screen' }} opacity="1" filter="url(#glow)">
      <path
        d="M794.272 -110.824V219.828C794.272 247.442 771.886 269.828 744.272 269.828H431.28C403.666 269.828 381.28 292.214 381.28 319.828V551.806C381.28 579.421 358.894 601.806 331.28 601.806H53.7265C26.1123 601.806 3.7265 624.192 3.7265 651.806V908.824"
        stroke="url(#lineGradient)"
        strokeOpacity="1"
        strokeWidth="4"
      />
    </g>
    <defs>
      <filter
        id="glow"
        x="0.726"
        y="-112.824"
        width="796.546"
        height="1023.65"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur" />
      </filter>

      <linearGradient
        id="lineGradient"
        x1="398.999"
        y1="-110.824"
        x2="398.999"
        y2="908.824"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#358D93" />
        <stop offset="1" stopColor="#102B2D" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default DecorationLine;
