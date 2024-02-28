import React from 'react'
import { Button } from '..'
import { Eye } from '@/icons'

type ResourceItemDetailsProps = {
  styles?: string
  title: string
  description: string
  variant?: string
}

const ResourceItemDetails = (props: ResourceItemDetailsProps) => {
  const { title = '', description = '', styles = '', variant = '' } = props
  return (
    <div
      className={`${styles} flex flex-wrap items-center justify-between gap-x-5 gap-y-5 rounded-xl border-2 border-solid border-dark-400 bg-dark-300 p-5 md:p-6 2xl:p-8`}
    >
      <div className="flex flex-col gap-y-0.5">
        <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
          {title}
        </p>
        <p className="text-base font-semibold text-white md:text-lg 2xl:text-xl">
          {description}
        </p>
      </div>
      {variant.length > 0 && (
        <Button
          icon={<Eye />}
          text="Preview"
          textStyles="text-grey-300"
          styles="bg-dark-200 border-2 border-solid border-dark-400 gap-x-1"
          iconStyles="p-0"
        />
      )}
    </div>
  )
}

export default ResourceItemDetails
