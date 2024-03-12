import { tw } from '@/utils/Tw'
import Link from 'next/link'
import React from 'react'

type FeatureCardProps = {
  title: string
  description: string
  styles?: string
  href?: string
}

const FeatureCard = (props: FeatureCardProps) => {
  const { title = '', description = '', styles = '', href } = props

  const card = href
    ? tw`transition-all hover:bg-dark-400 hover:text-grey-500 focus:text-grey-600 focus:ring focus:ring-dark-700 active:bg-dark-300 active:text-grey-400`
    : tw`transition-all hover:bg-dark-400 hover:text-grey-500 focus:text-grey-600`

  const cardProps = {
    className: tw`flex flex-col gap-y-1 rounded-xl border-2 border-solid border-dark-400 bg-dark-300 p-6 md:gap-y-4 md:p-8 2xl:gap-y-5 2xl:p-10 ${card} ${styles}`,
  }

  const linkProps = { ...cardProps, href }

  const cardElement = href?.length ? Link : 'div'

  return React.createElement(
    cardElement,
    href ? linkProps : (cardProps as any),
    <>
      <p className="text-lg font-medium text-white md:text-xl 2xl:text-2xl">
        {title}
      </p>
      <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
        {description}
      </p>
    </>,
  )
}

export default FeatureCard
