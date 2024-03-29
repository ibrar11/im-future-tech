import React from 'react'

type ResourceDescriptionItemProps = {
  styles?: string
  title: string
  description: string
  path: string
  alt: string
  detailsStyles?: string
}

const ResourceDescriptionItem = (props: ResourceDescriptionItemProps) => {
  const {
    styles = '',
    title = '',
    description = '',
    path = '',
    alt = '',
    detailsStyles = '',
  } = props
  return (
    <div className={`flex flex-col gap-y-6 ${styles}`}>
      <div
        className={`flex flex-col gap-y-2.5 sm:flex-row sm:items-center sm:gap-x-4 2xl:gap-x-5 ${detailsStyles}`}
      >
        <p className="min-w-48 text-lg font-semibold text-white md:text-xl 2xl:text-2xl">
          {title}
        </p>
        <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
      <span className="w-full">
        <img src={path} alt={alt} className="w-full rounded-lg object-cover" />
      </span>
    </div>
  )
}

export default ResourceDescriptionItem
