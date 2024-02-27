import React from 'react'

type UsersPhotoListProps = {
  styles?: string
  PathList: pathList[]
}

const UsersPhotoList = (props: UsersPhotoListProps) => {
  const { styles = '', PathList = [] } = props
  return (
    <div
      className={`flex w-max items-center justify-center rounded-full p-2.5 ${styles}`}
    >
      {PathList.map((item, index) => (
        <span
          key={item.id}
          className={`md:w-12.5 2xl:w-15 ${index !== 0 && 'ml-[-12px] md:ml-[-15px]'} flex w-10 items-center justify-center`}
        >
          <img src={item.path} alt={item.alt} className="object-cover" />
        </span>
      ))}
    </div>
  )
}

export default UsersPhotoList
