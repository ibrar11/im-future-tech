import React from "react";

const InfinityCross = ({ size = "30" }: iconProps) => {
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
        d="M15 21a6 6 0 106-6h-6v6zM15 9a6 6 0 10-6 6h6V9z"
      ></path>
      <path
        fill="#404040"
        fillRule="evenodd"
        d="M21 3a6 6 0 00-6 6v6h6a6 6 0 000-12zm3 6a3 3 0 11-6 0 3 3 0 016 0zM9 27a6 6 0 006-6v-6H9a6 6 0 000 12zm3-6a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default InfinityCross;
