import React from 'react'
import { UsersPhotoList } from '..'

type DownloadMileStoneProps = {
  styles?: string
  PathList: pathList[]
}

const DownloadMileStone = (props: DownloadMileStoneProps) => {
  const { styles = '', PathList = [] } = props
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border-[2px] border-solid border-dark-400 bg-dark-300 px-8 py-5 sm:max-w-fit 2xl:gap-x-12 2xl:p-8 ${styles}`}
    >
      <div className="flex flex-col gap-y-0.5 2xl:gap-y-1">
        <p className="text-sm font-normal leading-relaxed text-grey-300 2xl:text-lg">
          Downloaded By
        </p>
        <p className="text-lg font-semibold text-white md:text-xl 2xl:text-2xl">
          10k + Users
        </p>
      </div>
      <UsersPhotoList styles="bg-dark-200 rounded-xl" PathList={PathList} />
    </div>
  )
}

export default DownloadMileStone
