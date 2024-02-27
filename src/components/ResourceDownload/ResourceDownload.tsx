import React from 'react'
import { Button } from '..'
import { Eye } from '@/icons'

type ResourceAuthorProps = {
  styles?: string
}

const ResourceDownload = (props: ResourceAuthorProps) => {
  const { styles = '' } = props
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-5 rounded-xl border-2 border-solid border-dark-400 bg-dark-300 p-5 md:p-6 2xl:p-8">
      <div className={`flex flex-col gap-y-0.5  ${styles}`}>
        <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
          Download Formats
        </p>
        <p className="min-w-48 text-base font-semibold text-white md:text-lg 2xl:text-xl">
          PDF format for access.
        </p>
      </div>
      <Button
        icon={<Eye />}
        text="Preview"
        textStyles="text-grey-300"
        styles="bg-dark-200 border-2 border-solid border-dark-400 gap-x-1"
        iconStyles="p-0"
      />
    </div>
  )
}

export default ResourceDownload
