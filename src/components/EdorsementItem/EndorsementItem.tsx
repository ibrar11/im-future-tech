import React from 'react'

type EndorsementItemProps = {
  index?: number
  lastIndex?: number
  number: string
  text: string
  styles?: string
}

const EndorsementItem = (props: EndorsementItemProps) => {
  const { number = '', text = '', styles = '', index, lastIndex } = props

  return (
    <div
      className={`flex flex-col items-start justify-center py-5 sm:py-8 md:pr-10 lg:pr-10 ${index === 0 ? 'pr-2 sm:pr-5' : index === lastIndex ? 'border-l-2 border-dark-400 px-2 sm:px-5 sm:pr-20 lg:pl-10' : 'border-l-2 border-dark-400 px-2 sm:px-5 lg:pl-10'} ${styles}`}
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
