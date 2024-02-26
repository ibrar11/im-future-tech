import React from 'react'

const ShareIconTrinangle = ({ color = '#666666', size = '24' }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.038 14.462l-5.866-2.667c-.807-.367-.773-1.525.055-1.844L18.9 4.308c.809-.311 1.603.483 1.292 1.292L14.55 20.273c-.319.828-1.477.863-1.844.055l-2.667-5.866zm0 0l4.385-4.385"
      ></path>
    </svg>
  )
}

export default ShareIconTrinangle
