import React from 'react'
import { Button, InteractionBtn } from '..'
import { PostContentType } from './postContentList'
import { ArrowUpRight } from '@/icons'

type PostContentItemProps = {
  post: PostContentType
  styles?: string
  buttonText: string
}

const PostContentItem = (props: PostContentItemProps) => {
  const { post, styles = '', buttonText } = props
  return (
    <div className="md:w-7/10 justify-between md:flex lg:w-3/4 xl:w-4/5">
      <div className="2xl:gap-y-7.5 md:max-w-7/10 lg:max-w-4/5 xl:max-w-9/10 flex flex-col items-start gap-y-5 md:gap-y-6">
        <div
          className={`2xl:gap-y-7.5 flex flex-col items-start justify-between gap-y-5 md:gap-y-6 ${styles}`}
        >
          <p className="text-base font-semibold text-grey-300 md:text-lg 2xl:text-xl">
            {post?.date}
          </p>
          <div className="flex flex-col gap-y-1 md:gap-y-1.5 2xl:gap-y-2.5">
            <p className="md:text-1.5xl 2xl:text-2.5xl text-lg font-semibold text-white">
              {post?.title}
            </p>
            <p className="text-sm font-normal text-grey-300 xl:text-base 2xl:text-lg">
              {post?.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 2xl:gap-x-2.5">
          {post?.interactions.map((item) => (
            <InteractionBtn
              key={item.id}
              icon={item.icon}
              number={item.number}
            />
          ))}
        </div>
      </div>
      <span className="hidden md:block">
        <Button href="/" iconStyle="p-0.5 md:size-6" icon={<ArrowUpRight />}>
          {buttonText}
        </Button>
      </span>
    </div>
  )
}

export default PostContentItem
