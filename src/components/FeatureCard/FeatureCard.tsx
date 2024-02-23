import React from 'react'

const FeatureCard = () => {
  return (
    <div className="flex flex-col gap-y-1 rounded-xl bg-dark-300 p-6 md:gap-y-4 md:p-8 2xl:gap-y-5 2xl:p-10">
      <p className="text-lg font-medium text-white md:text-xl 2xl:text-2xl">
        Quantity
      </p>
      <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
        Over 1,000 articles on emerging tech trends and breakthroughs.
      </p>
    </div>
  )
}

export default FeatureCard
