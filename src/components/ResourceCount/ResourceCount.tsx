import React from 'react'

type ResourceCountProps = {
  styles?: string
  title: string
  description: string
}

const ResourceCount = (props: ResourceCountProps) => {
  const { title = '', description = '', styles = '' } = props
  return (
    <div
      className={`flex flex-col gap-y-0.5 rounded-xl border-[2px] border-solid border-dark-400 bg-dark-300 p-5 md:p-6 2xl:p-8 ${styles}`}
    >
      <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
        {title}
      </p>
      <p className="min-w-48 text-base font-semibold text-white md:text-lg 2xl:text-xl">
        {description}
      </p>
    </div>
  )
}

export default ResourceCount
