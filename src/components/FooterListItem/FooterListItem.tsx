import React from 'react'
import { SubTitles } from './footerList'
import { Span } from 'next/dist/trace'

type FooterListItemProps = {
  title: string
  subTitles: SubTitles[]
}

const FooterListItem = (props: FooterListItemProps) => {
  const { title = '', subTitles = [] } = props
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-7 2xl:gap-y-9">
      <p className="text-base font-medium text-white md:text-lg 2xl:text-xl">
        {title}
      </p>
      <div className="flex flex-col gap-y-2 md:gap-y-3 2xl:gap-y-5">
        {subTitles.map((item) => (
          <div key={item.id} className="flex items-center gap-x-2">
            <p className="text-sm font-normal text-dark-900 2xl:text-lg">
              {item.item}
            </p>
            {item.variant === 'withNewTag' && (
              <div className="bg-gradient-border rounded p-0.5">
                <div className="rounded-sm bg-dark-300 px-2 py-0.5 text-sm font-normal text-white 2xl:text-lg">
                  New
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterListItem
