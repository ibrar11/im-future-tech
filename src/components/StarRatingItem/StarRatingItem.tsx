import { FilledStar } from '@/icons'
import React from 'react'

const StarRatingItem = () => {
  const stars = Array(5).fill(1)

  return (
    <div className="z-10 flex w-max items-center justify-center gap-x-1 rounded-full border-2 border-solid border-dark-400 bg-dark-200 px-3 py-2 2xl:gap-x-1.5 2xl:px-4 2xl:py-2.5">
      {stars.map((item, index) => (
        <span
          key={index}
          className="flex w-5 items-center justify-center 2xl:w-6 "
        >
          <FilledStar color="#FFD11A" />
        </span>
      ))}
    </div>
  )
}

export default StarRatingItem
