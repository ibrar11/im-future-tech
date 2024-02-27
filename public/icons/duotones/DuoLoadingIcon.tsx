
const DuoLoadingIcon = ({ size = "30" }: iconProps) => {
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
        d="M17.356 20.65h-4.683V30h4.683v-9.35zM17.356 0h-4.683v9.35h4.683V0zM20.646 12.657v4.683h9.35v-4.683h-9.35zM0 12.661v4.683h9.35v-4.683H0z"
      ></path>
      <path
        fill="#404040"
        d="M20.654 17.326l-3.311 3.312 6.611 6.611 3.312-3.311-6.612-6.612zM6.055 2.727L2.743 6.04l6.612 6.611 3.311-3.311-6.611-6.612zM17.332 9.353l3.312 3.312 6.61-6.612-3.31-3.311-6.612 6.611zM2.734 23.952l3.312 3.311 6.611-6.611-3.311-3.312-6.612 6.612z"
      ></path>
    </svg>
  );
};

export default DuoLoadingIcon;
