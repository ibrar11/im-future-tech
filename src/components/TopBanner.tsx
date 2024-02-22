import React from 'react'
import { ArrowUpRight } from '@/icons'

const TopBanner = () => {
  return (
    <div className="flex justify-center gap-x-8 px-2 pb-3 pt-10 sm:py-2">
      <p className="text-xs font-normal leading-normal text-grey-300 sm:text-sm 2xl:text-lg">
        Subscribe to our Newsletter For Blogs and Resources
      </p>
      <ArrowUpRight color="#FFD11A" />
    </div>
  )
}

export default TopBanner
