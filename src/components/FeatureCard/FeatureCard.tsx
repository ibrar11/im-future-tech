import React from 'react'

type FeatureCardProps = {
  title: string
  description: string
  styles?: string
}

const FeatureCard = (props: FeatureCardProps) => {
  const { title = '', description = '', styles = '' } = props
  return (
    <div
      className={`flex flex-col gap-y-1 rounded-xl border-2 border-solid border-dark-400 bg-dark-300 p-6 md:gap-y-4 md:p-8 2xl:gap-y-5 2xl:p-10 ${styles}`}
    >
      <p className="text-lg font-medium text-white md:text-xl 2xl:text-2xl">
        {title}
      </p>
      <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
