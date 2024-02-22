import React from "react";

const ArrowUpRight = ({ size = "20", color = "white" }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.25.75H16.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V3.31L2.03 17.03a.75.75 0 01-1.06-1.06L14.69 2.25H5.25a.75.75 0 010-1.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default ArrowUpRight;
