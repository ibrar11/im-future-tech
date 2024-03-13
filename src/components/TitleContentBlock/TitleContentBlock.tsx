import React from 'react'

type TitleContentBlockProps = {
  title: string
  content: string
}

const TitleContentBlock = (props: TitleContentBlockProps) => {
  const { title, content } = props
  return (
    <div className="flex flex-col lg:gap-y-0.5">
      <p className="inter-font text-sm font-normal leading-normal text-grey-200 md:text-base 2xl:text-lg">
        {title}
      </p>
      <p className="inter-font text-sm font-normal leading-normal text-white md:text-base 2xl:text-lg">
        {content}
      </p>
    </div>
  )
}

export default TitleContentBlock
