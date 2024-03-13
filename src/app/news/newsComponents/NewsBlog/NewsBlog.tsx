import { Button, InteractionBtn, TitleContentBlock } from '@/components'
import { ArrowUpRight, EmptyHeart, ShareIconTrinangle } from '@/icons'
import React from 'react'
import { otherDetails } from './newsBlogList'

type NewsBlogProps = {
  path?: string
  alt?: string
  title?: string
  description?: string
  variant?: 'primary' | 'secondary'
  likes?: number
  share?: number
  otherDetails?: otherDetails[]
}

const NewsBlog = (props: NewsBlogProps) => {
  const {
    path,
    alt,
    variant = 'primary',
    likes = 0,
    share = 0,
    title,
    description,
    otherDetails = [],
  } = props
  return (
    <div
      className={`${variant === 'primary' ? 'gap-y-7.5 items-center md:flex-row md:gap-x-10 2xl:gap-x-20' : 'xl:min-w-3/10 gap-y-4 2xl:gap-y-5'} flex flex-col`}
    >
      <div className={`w-full ${variant === 'primary' ? 'md:w-2/5' : ''}`}>
        <img src={path} alt={alt} className="w-full object-cover" />
      </div>
      <div
        className={`flex flex-col ${variant === 'primary' ? '2xl:gap-y-12.5 gap-y-5 md:w-3/5 lg:gap-y-10' : 'gap-y-2.5 md:gap-y-4 2xl:gap-y-5'}`}
      >
        <div className="2xl:gap-y-7.5 flex flex-col gap-y-1.5 md:gap-y-3.5">
          <p
            className={`font-semibold text-white ${variant === 'primary' ? 'text-xl md:text-2xl 2xl:text-3xl' : 'text-base 2xl:text-xl'}`}
          >
            {title}
          </p>
          <p
            className={`font-normal leading-relaxed text-grey-300 ${variant === 'primary' ? 'text-base md:text-lg 2xl:text-xl' : 'text-sm md:text-base 2xl:text-xl'}`}
          >
            {description}
          </p>
        </div>
        {variant === 'primary' && (
          <div className="lg:gap-x-7.5 2xl:gap-x-12.5 flex flex-wrap gap-x-2.5 gap-y-3">
            {otherDetails.map((item) => (
              <TitleContentBlock
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex gap-x-2 2xl:gap-x-2.5">
            <InteractionBtn icon={<EmptyHeart />} number={likes} />
            <InteractionBtn icon={<ShareIconTrinangle />} number={share} />
          </div>
          {variant === 'primary' ? (
            <Button href="/">Read More</Button>
          ) : (
            <Button
              href="/"
              icon={<ArrowUpRight color="#FFD11A" />}
              iconStyle="p-0.5 md:size-6"
            >
              Read More
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsBlog
