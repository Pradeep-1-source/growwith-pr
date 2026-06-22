import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function GrowWithPRLogo({ className = "w-10 h-10", glow = false }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-brand-gold/15 blur-lg rounded-full" />
      )}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Gradient Ring */}
        <defs>
          <linearGradient id="circleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#E2B857" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#E2B857" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2B857" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
          <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E2B857" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brand Glow Background */}
        <circle cx="250" cy="250" r="230" fill="url(#logoGlow)" />

        {/* Main Circle Outline (broken slightly where arrow exits) */}
        <path
          d="M 120,410 A 210,210 0 1,1 360,110"
          stroke="url(#circleGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Bottom part of the circle closure */}
        <path
          d="M 360,110 A 210,210 0 0,1 120,410"
          stroke="url(#circleGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeOpacity="0.4"
          strokeDasharray="15, 10"
          fill="none"
        />

        {/* Upward Growth Arrow */}
        <path
          d="M 310,250 L 360,150 L 315,185 M 360,150 L 260,205"
          stroke="url(#arrowGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Grow Title Segment (Centered) */}
        <text
          x="225"
          y="255"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="72"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="-1px"
        >
          Grow
        </text>

        {/* with. Pr Segment (Below Grow, indented) */}
        <text
          x="245"
          y="320"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="48"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          with. <tspan fill="#E2B857" fontWeight="bold">Pr</tspan>
        </text>

        {/* Base Split Line with Circle Accent */}
        <line
          x1="140"
          y1="365"
          x2="230"
          y2="365"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="250" cy="365" r="8" fill="#FFFFFF" />
        <line
          x1="270"
          y1="365"
          x2="360"
          y2="365"
          stroke="url(#circleGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
