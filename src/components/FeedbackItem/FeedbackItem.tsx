import React from 'react'
import { StarRatingItem } from '..'

type FeedbackItemProps = {
  description: string
}

const FeedbackItem = (props: FeedbackItemProps) => {
  const { description = '' } = props
  return (
    <div className="flex flex-col items-center">
      <StarRatingItem />
      <div className="borer-2 rounded-2lg -mt-[22px] border-dark-400 bg-dark-300 px-5 pb-5 pt-8 2xl:px-8 2xl:pb-8 2xl:pt-12">
        <p className="text-center text-sm font-normal leading-normal text-white md:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeedbackItem
