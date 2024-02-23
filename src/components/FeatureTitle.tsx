import React from 'react'

type FeatureTitleProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureTitle = (props: FeatureTitleProps) => {
  const { icon, title, description } = props
  return (
    <div className="2xl:gap-y-15 flex flex-col gap-y-5 py-12 md:gap-y-10">
      <span className="w-max">{icon}</span>
      <div className="flex flex-col gap-y-1.5 md:gap-y-2.5 2xl:gap-y-4">
        <h3 className="2xl:text-4.5xl text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h3>
        <p className="text-sm font-normal leading-relaxed text-grey-300 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureTitle
