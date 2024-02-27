import React from 'react'

const DuoDoubleLeaf = ({ size = '30' }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#FFD11A"
        d="M3 3h12c6.627 0 12 5.373 12 12H15C8.373 15 3 9.627 3 3z"
      ></path>
      <path
        fill="#404040"
        d="M3 15h12c6.627 0 12 5.373 12 12H15C8.373 27 3 21.627 3 15z"
      ></path>
    </svg>
  )
}

export default DuoDoubleLeaf
