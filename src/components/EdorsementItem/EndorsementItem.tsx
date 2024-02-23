import React from 'react'
import { tw } from '../../utils/Tw'

type EndorsementItemProps = {
  number: string
  text: string
  styles?: string
}

const EndorsementItem = (props: EndorsementItemProps) => {
  const { number = '', text = '', styles = '' } = props

  return (
    <div
      className={tw`flex flex-col items-start justify-center py-5 ${styles}`}
    >
      <h3 className="2xl:text-4.5xl text-2xl font-semibold text-white md:text-3xl">
        {number}
        <span className="text-yellow-200">+</span>
      </h3>
      <p className="text-sm font-normal leading-relaxed text-grey-300 2xl:text-lg">
        {text}
      </p>
    </div>
  )
}

export default EndorsementItem
