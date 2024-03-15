import React from 'react'
import { SubTitles } from './footerList'
import Link from 'next/link'

type FooterListItemProps = {
  title: string
  subTitles: SubTitles[]
}

const FooterListItem = (props: FooterListItemProps) => {
  const { title = '', subTitles = [] } = props
  return (
    <div className="flex w-1/2 flex-col gap-y-4 sm:w-auto md:gap-y-7 2xl:gap-y-9">
      <Link
        href={'/'}
        className="text-base font-medium text-white hover:text-grey-200 md:text-lg 2xl:text-xl"
      >
        {title}
      </Link>
      <div className="flex flex-col gap-y-2 md:gap-y-3 2xl:gap-y-5">
        {subTitles.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 pr-0.5"
          >
            <Link
              href={'/'}
              className="text-sm font-normal text-dark-900 hover:text-grey-300 2xl:text-lg"
            >
              {item.item}
            </Link>
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
