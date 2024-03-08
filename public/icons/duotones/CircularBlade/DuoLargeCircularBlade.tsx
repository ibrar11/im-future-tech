import React from 'react'

const DuoLargeCircularBlade = ({ color = '#FFD11A' }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="151"
      fill={color}
      viewBox="0 0 150 151"
    >
      <path
        fill={color}
        d="M99.999 150.5v-25c13.833 0 25-11.166 25-25h24.999c0 27.667-22.416 50-50 50z"
      ></path>
      <path
        fill={color}
        d="M100 150.5v-25c-13.834 0-25-11.166-25-25H50c0 27.667 22.416 50 50 50zM0 100.498h25c0 13.833 11.166 25 25 25v24.999c-27.584 0-50-22.333-50-49.999z"
      ></path>
      <path
        fill={color}
        d="M0 100.499h25c0-13.833 11.166-25 25-25V50.5c-27.584 0-50 22.416-50 49.999zM50 .5v25c-13.834 0-25 11.167-25 25H0C0 22.917 22.416.5 50 .5z"
      ></path>
      <path
        fill={color}
        d="M50 .5v25c13.833 0 25 11.167 25 25h24.999c0-27.583-22.416-50-50-50zM149.998 50.5h-25c0-13.833-11.166-25-25-25V.5c27.584 0 50 22.417 50 50z"
      ></path>
      <path
        fill={color}
        d="M149.998 50.5h-25c0 13.833-11.166 25-25 25v24.999c27.584 0 50-22.333 50-50z"
      ></path>
    </svg>
  )
}

export default DuoLargeCircularBlade
