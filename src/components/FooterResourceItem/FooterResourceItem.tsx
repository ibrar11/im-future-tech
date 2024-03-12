import React from 'react'
import { SubTitles } from '../FooterListItem/footerList'
import { Button } from '..'
import { ArrowUpRight } from '@/icons'

type FooterReourceItemProps = {
  title: string
  subTitles: SubTitles[]
}

const FooterResourceItem = (props: FooterReourceItemProps) => {
  const { title = '', subTitles = [] } = props
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-7 2xl:gap-y-9">
      <p className="text-base font-medium text-white md:text-lg 2xl:text-xl">
        {title}
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-2 md:flex-col md:gap-y-3 2xl:gap-y-5">
        {subTitles.map((item) => (
          <Button
            key={item.id}
            icon={<ArrowUpRight color="#FFD11A" />}
            iconStyle="p-0.5 md:size-6"
            href="/"
            styles="w-max sm:py-2"
          >
            {item.item}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FooterResourceItem
