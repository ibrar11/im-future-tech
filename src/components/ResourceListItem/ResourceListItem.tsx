import React from 'react'

type ResourceListItemProps = {
  icon: React.ReactNode
  title: string
  description: string
  styles?: string
}

const ResourceListItem = (props: ResourceListItemProps) => {
  const { icon = '', title = '', description = '', styles = '' } = props
  return (
    <div className="md:gap-y-7.5 flex flex-col justify-between gap-y-6 2xl:gap-y-12">
      <span className="h-12.5 w-12.5 md:w-15 md:h-15 flex items-center justify-center 2xl:size-20">
        {icon}
      </span>
      <div className="flex flex-col gap-y-1 md:gap-y-2.5 2xl:gap-y-3.5">
        <h3 className="2xl:text-4.5xl text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h3>
        <p className="text-sm font-normal leading-relaxed text-grey-300 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ResourceListItem
