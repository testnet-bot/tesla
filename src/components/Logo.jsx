import React from 'react'

export default function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="17,2 32,9.5 32,24.5 17,32 2,24.5 2,9.5" fill="#e31937" />
      <text
        x="17" y="22"
        fontFamily="Inter,sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        XN
      </text>
    </svg>
  )
}
