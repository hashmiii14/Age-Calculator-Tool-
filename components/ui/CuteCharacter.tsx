'use client';

import React from 'react';

interface CuteCharacterProps {
  variant?: 'thinking' | 'celebrating' | 'calendar' | 'mascot' | 'milestone';
  className?: string;
  size?: number;
}

export default function CuteCharacter({
  variant = 'thinking',
  className = '',
  size = 120,
}: CuteCharacterProps) {
  if (variant === 'thinking') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        {/* Soft Background Cloud Shape */}
        <path
          d="M30 130C20 130 10 120 10 105C10 92 20 82 32 81C35 60 52 45 74 45C92 45 107 56 114 72C121 66 130 62 140 62C160 62 176 77 178 97C188 99 195 108 195 119C195 131 185 140 172 140L30 140Z"
          fill="#FFF0EC"
        />

        {/* Character Head */}
        <circle cx="100" cy="95" r="36" fill="#FCD5C5" />
        
        {/* Hair */}
        <path
          d="M68 90C68 70 82 56 100 56C118 56 132 70 132 90C132 92 128 78 116 75C104 72 96 80 84 76C74 73 70 85 68 90Z"
          fill="#2C182E"
        />
        <path
          d="M74 72C70 65 65 60 58 60C55 60 52 63 54 67C57 73 66 76 74 72Z"
          fill="#2C182E"
        />

        {/* Cheeks */}
        <circle cx="82" cy="102" r="5" fill="#F8A495" opacity="0.6" />
        <circle cx="118" cy="102" r="5" fill="#F8A495" opacity="0.6" />

        {/* Eyes (Looking Up Pondering) */}
        <ellipse cx="88" cy="93" rx="3.5" ry="4.5" fill="#2C182E" />
        <ellipse cx="112" cy="93" rx="3.5" ry="4.5" fill="#2C182E" />
        <circle cx="89.5" cy="91.5" r="1.5" fill="#FFFFFF" />
        <circle cx="113.5" cy="91.5" r="1.5" fill="#FFFFFF" />

        {/* Eyebrows */}
        <path d="M83 84Q88 81 93 85" stroke="#2C182E" strokeWidth="2" strokeLinecap="round" />
        <path d="M107 85Q112 81 117 84" stroke="#2C182E" strokeWidth="2" strokeLinecap="round" />

        {/* Cute Mouth */}
        <path d="M95 106Q100 110 105 106" stroke="#2C182E" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Shirt / Torso */}
        <path
          d="M65 140C65 125 78 118 100 118C122 118 135 125 135 140L65 140Z"
          fill="#E85D36"
        />

        {/* Hand on Chin (Thinking Pose) */}
        <path
          d="M108 122C112 115 116 108 112 104C108 100 104 105 104 110"
          stroke="#FCD5C5"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Floating Question Marks */}
        <text x="138" y="55" fill="#E85D36" fontSize="24" fontFamily="serif" fontWeight="bold">?</text>
        <text x="50" y="50" fill="#F07C5F" fontSize="18" fontFamily="serif" fontWeight="bold">¿</text>
        
        {/* Autumn Leaf Detail */}
        <path
          d="M25 60C30 50 40 45 45 40C45 48 40 55 35 60Z"
          fill="#E85D36"
          opacity="0.8"
        />
      </svg>
    );
  }

  if (variant === 'celebrating') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        {/* Glow Circle */}
        <circle cx="100" cy="100" r="75" fill="#FFF5F2" />
        
        {/* Character Head */}
        <circle cx="100" cy="85" r="34" fill="#FCD5C5" />

        {/* Happy Eyes */}
        <path d="M82 82Q88 75 94 82" stroke="#2C182E" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M106 82Q112 75 118 82" stroke="#2C182E" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Rosy Cheeks */}
        <circle cx="78" cy="90" r="5" fill="#F8A495" opacity="0.7" />
        <circle cx="122" cy="90" r="5" fill="#F8A495" opacity="0.7" />

        {/* Big Smile */}
        <path d="M90 94Q100 106 110 94Z" fill="#2C182E" />
        <path d="M94 99Q100 105 106 99" fill="#F8A495" />

        {/* Party Hat */}
        <polygon points="100,25 82,60 118,60" fill="#E85D36" />
        <circle cx="100" cy="22" r="5" fill="#FFCDB4" />
        <path d="M88 45L112 45" stroke="#FFFFFF" strokeWidth="3" />

        {/* Torso */}
        <path d="M68 135C68 115 80 108 100 108C120 108 132 115 132 135Z" fill="#E85D36" />

        {/* Raised Arms */}
        <path d="M70 112L52 95" stroke="#FCD5C5" strokeWidth="7" strokeLinecap="round" />
        <path d="M130 112L148 95" stroke="#FCD5C5" strokeWidth="7" strokeLinecap="round" />

        {/* Confetti Elements */}
        <circle cx="45" cy="65" r="4" fill="#E85D36" />
        <circle cx="155" cy="65" r="4" fill="#F4A390" />
        <rect x="145" y="115" width="6" height="6" fill="#E85D36" transform="rotate(25 145 115)" />
        <rect x="42" y="110" width="6" height="6" fill="#F4A390" transform="rotate(-15 42 110)" />
      </svg>
    );
  }

  if (variant === 'calendar') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        {/* Soft Background */}
        <rect x="15" y="25" width="130" height="120" rx="28" fill="#FFF5F2" />
        <rect x="25" y="35" width="110" height="100" rx="20" fill="#FFFFFF" stroke="#F9CFC5" strokeWidth="2" />
        
        {/* Top Header Bar */}
        <path d="M25 55C25 43.9543 33.9543 35 45 35H115C126.046 35 135 43.9543 135 55V60H25V55Z" fill="#E85D36" />
        
        {/* Calendar Rings */}
        <rect x="45" y="25" width="8" height="16" rx="4" fill="#2C182E" />
        <rect x="107" y="25" width="8" height="16" rx="4" fill="#2C182E" />

        {/* Cute Face on Calendar Body */}
        <ellipse cx="62" cy="85" rx="3" ry="4" fill="#2C182E" />
        <ellipse cx="98" cy="85" rx="3" ry="4" fill="#2C182E" />
        <circle cx="55" cy="90" r="4" fill="#F8A495" opacity="0.6" />
        <circle cx="105" cy="90" r="4" fill="#F8A495" opacity="0.6" />
        <path d="M75 92Q80 97 85 92" stroke="#2C182E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Date Heart Badge */}
        <rect x="55" y="105" width="50" height="20" rx="10" fill="#FFF0EC" />
        <path d="M80 111C80 111 76 107 72 110C68 113 72 118 80 122C88 118 92 113 88 110C84 107 80 111 80 111Z" fill="#E85D36" />
      </svg>
    );
  }

  // Mascot Default
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="50" fill="#FFF5F2" stroke="#F9CFC5" strokeWidth="2" />
      <circle cx="60" cy="54" r="22" fill="#FCD5C5" />
      <path d="M42 50C42 36 50 28 60 28C70 28 78 36 78 50Z" fill="#2C182E" />
      <circle cx="52" cy="52" r="2.5" fill="#2C182E" />
      <circle cx="68" cy="52" r="2.5" fill="#2C182E" />
      <path d="M56 59Q60 63 64 59" stroke="#2C182E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M40 92C40 78 48 72 60 72C72 72 80 78 80 92Z" fill="#E85D36" />
    </svg>
  );
}
