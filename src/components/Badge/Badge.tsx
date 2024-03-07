import React from 'react'

type BadgeProps = {
  badgeTitle: string
}

const Badge = (props: BadgeProps) => {
  const { badgeTitle = '' } = props
  return (
    <p className="max-w-fit rounded bg-dark-500 px-2 py-1 text-sm font-normal text-white md:text-base 2xl:px-2.5 2xl:py-1.5 2xl:text-lg">
      {badgeTitle}
    </p>
  )
}

export default Badge
