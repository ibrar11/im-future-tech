import React from 'react'

const FilledStar = ({ color = '#fff' }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.258 5.273c.27 1.136-.965 2.033-1.961 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.75-2.305l5.403-.434 2.082-5.005z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default FilledStar
