'use client'
import React, { useState, useEffect } from 'react'

const BricksTriangle = ({ size = '40' }: iconProps) => {
  const [iconSize, setIconSize] = useState(size)

  useEffect(() => {
    const handleResize = () => {
      const newSize =
        window.innerWidth >= 768
          ? '60'
          : window.innerWidth >= 1536
            ? '80'
            : size
      setIconSize(newSize)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [size])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      fill="none"
      viewBox="0 0 70 61"
    >
      <path fill="#FFD11A" d="M16.095 41.95V60.5h37.137V41.95H16.095z"></path>
      <path
        fill="#404040"
        d="M53.224 41.935l16.064-9.275L50.719.5 34.656 9.775l18.568 32.16zM34.632 9.8L18.568.525 0 32.685l16.064 9.275L34.632 9.8z"
      ></path>
    </svg>
  )
}

export default BricksTriangle
