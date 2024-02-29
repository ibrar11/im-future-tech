import { ArrowUpRight } from '@/icons'
import React from 'react'

type InformationHubCardProps = {
  title: string
  description: string
}

const InformationHubCard = (props: InformationHubCardProps) => {
  const { title = '', description = '' } = props
  return (
    <div className="rounded-2lg flex flex-col gap-y-2.5 border-2 border-dark-400 bg-dark-300 p-6 md:gap-y-4 md:p-8 2xl:gap-y-5 2xl:p-10">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-white md:text-lg 2xl:text-[22px]">
          {title}
        </p>
        <span className="2xl:w-13 2xl:h-13 right-0 top-[40%] flex h-10 w-10 items-center justify-center rounded-full bg-yellow-200 p-3 md:h-11 md:w-11">
          <ArrowUpRight color="black" />
        </span>
      </div>
      <p className="text-sm font-normal leading-normal text-grey-300 md:text-base 2xl:text-lg">
        {description}
      </p>
    </div>
  )
}

export default InformationHubCard
