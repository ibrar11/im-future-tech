import React from 'react'
import { ArrowUpRight } from '@/icons'

interface BenefitsListItemProps {
  icon: React.ReactNode
  title: string
  subHeading: string
  description: string
  styles?: string
}

const AchievementCard = (props: BenefitsListItemProps) => {
  const { icon, title, subHeading, description, styles } = props

  return (
    <div className={`flex items-center justify-between ${styles}`}>
      <div className="relative flex flex-col justify-start gap-y-3 py-7 md:py-10 2xl:py-12 ">
        <span>{icon}</span>
        <div>
          <p className="text-base font-medium text-white md:text-lg 2xl:text-xl">
            {title}
          </p>
          <p className="text-sm font-normal text-grey-200 md:text-base 2xl:text-lg">
            {subHeading}
          </p>
        </div>
        <p className="kumbh-font text-sm font-normal text-grey-300 md:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
      <div className="2xl:w-13 2xl:h-13 right-0 top-[40%] flex h-10 w-10 items-center justify-center rounded-full bg-yellow-200 p-3 md:h-11 md:w-11">
        <ArrowUpRight color="black" />
      </div>
    </div>
  )
}

export default AchievementCard
