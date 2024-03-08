import React from 'react'
import { ArrowUpRight } from '@/icons'
import Link from 'next/link'

interface BenefitsListItemProps {
  icon?: React.ReactNode
  title: string
  subHeading?: string
  description: string
  styles?: string
  variant?: 'primary' | 'secondary'
}

const AchievementCard = (props: BenefitsListItemProps) => {
  const {
    icon,
    title,
    subHeading,
    description,
    styles,
    variant = 'primary',
  } = props

  return (
    <div
      className={`flex flex-col justify-start gap-y-2.5 md:gap-y-4 ${variant === 'primary' ? '' : 'rounded-2lg lg:p-7.5 border-2 border-dark-400 bg-dark-300 p-6 2xl:p-10'}`}
    >
      <div className={`flex items-center justify-between ${styles}`}>
        <div
          className={`relative flex flex-col justify-start gap-y-3 ${variant === 'primary' ? 'py-7 md:py-10' : 'py-0 md:py-0'}  2xl:py-12`}
        >
          {variant === 'primary' && <span>{icon}</span>}
          <div>
            <p
              className={`text-base ${variant === 'primary' ? 'font-medium' : 'font-semibold'} text-white md:text-lg 2xl:text-xl`}
            >
              {title}
            </p>
            {variant === 'primary' && (
              <p className="text-sm font-normal text-grey-200 md:text-base 2xl:text-lg">
                {subHeading}
              </p>
            )}
          </div>
          {variant === 'primary' && (
            <p className="kumbh-font text-sm font-normal text-grey-300 md:text-base 2xl:text-lg">
              {description}
            </p>
          )}
        </div>
        <Link
          href={'/'}
          className="2xl:w-13 2xl:h-13 right-0 top-[40%] flex h-10 w-10 items-center justify-center rounded-full bg-yellow-200 p-3 md:h-11 md:w-11"
        >
          <ArrowUpRight color="black" />
        </Link>
      </div>
      {variant === 'secondary' && (
        <div className="max-w-9/10">
          <p className="text-sm font-normal text-grey-200 md:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export default AchievementCard
