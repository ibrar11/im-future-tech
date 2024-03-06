import { Heart } from '@/icons'
import React from 'react'

type PostInteractableItemProps = {
  icon: React.ReactNode
  number: number
}

const InteractionBtn = (props: PostInteractableItemProps) => {
  const { number, icon } = props

  return (
    <button className="flex w-max items-center justify-center gap-x-0.5 rounded-3xl border-[2px] border-solid border-dark-400 px-3 py-1.5 2xl:gap-x-1 2xl:px-4 2xl:py-2">
      <span className="flex size-5 items-center justify-center 2xl:size-6">
        {icon}
      </span>
      <p className="text-sm font-normal text-grey-300 2xl:text-lg">
        {Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(number)}
      </p>
    </button>
  )
}

export default InteractionBtn
