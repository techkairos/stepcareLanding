import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className = "h-10", variant = 'color' }: LogoProps) {
  const logoUrl = "https://storage.googleapis.com/generativeai-downloads/images/input_file_0.png";
  
  return (
    <img 
      src={logoUrl} 
      alt="StepCare Logo" 
      className={`${className} object-contain transition-all duration-300`}
    />
  );
}
