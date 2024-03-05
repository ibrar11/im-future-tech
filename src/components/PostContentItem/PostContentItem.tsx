import React from 'react'

type PostContentItemProps = {
  date: string
  title: string
  description: string
  styles?: string
}

const PostContentItem = (props: PostContentItemProps) => {
  const { date = '', title = '', description = '', styles = '' } = props
  return (
    <div
      className={`2xl:gap-y-7.5 flex flex-col items-start justify-between gap-y-5 md:gap-y-6 ${styles}`}
    >
      <p className="text-base font-semibold text-grey-300 md:text-lg 2xl:text-xl">
        {date}
      </p>
      <div className="flex flex-col gap-y-1 md:gap-y-1.5 2xl:gap-y-2.5">
        <p className="md:text-1.5xl 2xl:text-2.5xl text-lg font-semibold text-white">
          {title}
        </p>
        <p className="text-sm font-normal text-grey-300 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default PostContentItem
