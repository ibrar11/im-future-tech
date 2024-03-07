import React from 'react'
import { ResourceDescriptionItem, ResourceItemDetails } from '..'
import { ItemDetails, details } from '../ResourceItemDetails/resourceDetails'

type ResourceCardProps = {
  index?: number
  lastIndex?: number
  path: string
  alt: string
  title: string
  description: string
  details: ItemDetails[]
}

const ResourceCard = (props: ResourceCardProps) => {
  const {
    path = '',
    title = '',
    alt = '',
    description = '',
    details = [],
    index,
    lastIndex,
  } = props
  return (
    <div
      className={`2xl:gap-y-7.5 lg:pl-15 2xl:pl-x-20 md:w-13/20 flex flex-col gap-y-6 border-dark-400 md:border-l-2 pt-10 md:py-10 md:pl-5`}
    >
      <ResourceDescriptionItem
        path={path}
        alt={alt}
        title={title}
        description={description}
      />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 2xl:gap-x-5">
        {details.length > 0 &&
          details.map((item) => (
            <ResourceItemDetails
              key={item.id}
              title={item.title}
              description={item.description}
              variant={item.variant && item.variant}
              styles={item.styles && item.styles}
            />
          ))}
      </div>
    </div>
  )
}

export default ResourceCard
