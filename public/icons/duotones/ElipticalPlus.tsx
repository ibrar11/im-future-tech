'use client'
import React, { useState, useEffect } from 'react'

const ElipticalPlus = ({ size = '40' }: iconProps) => {
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
      viewBox="0 0 60 61"
    >
      <path
        fill="#404040"
        d="M40.5 41C48.505 39.073 54 35.095 54 30.5S48.505 21.927 40.5 20c.824 3.16 1.287 6.726 1.287 10.5S41.324 37.84 40.5 41zM19.5 41C11.495 39.073 6 35.095 6 30.5s5.495-8.573 13.5-10.5c-.823 3.16-1.287 6.726-1.287 10.5s.463 7.34 1.287 10.5z"
      ></path>
      <path
        fill="#FFD11A"
        d="M19.5 41c1.927 8.005 5.905 13.5 10.5 13.5s8.573-5.495 10.5-13.5c-3.16.824-6.726 1.287-10.5 1.287S22.66 41.824 19.5 41zM19.5 20C21.427 11.995 25.405 6.5 30 6.5s8.573 5.495 10.5 13.5c-3.16-.823-6.726-1.287-10.5-1.287s-7.34.463-10.5 1.287z"
      ></path>
    </svg>
  )
}

export default ElipticalPlus
