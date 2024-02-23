import React from 'react'

type ListItemProps = {
  styles: string
  title: string
  description: string
}

const ListItem = (props: ListItemProps) => {
  const { styles = '', title = '', description = '' } = props
  return (
    <div
      className={`flex items-center gap-x-2 md:gap-x-2.5 2xl:gap-x-4 ${styles}`}
    >
      <img
        src="/images/jhonTechson.png"
        alt="personImage"
        className="size-15 rounded-full 2xl:size-20"
      />
      <div className="flex flex-col 2xl:gap-y-0.5">
        <p className="text-lg font-semibold text-white md:text-xl 2xl:text-2xl">
          {title}
        </p>
        <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ListItem
