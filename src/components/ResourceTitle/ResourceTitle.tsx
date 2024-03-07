import React from 'react'
import { Button, DownloadMileStone, ResourceListItem } from '..'
import { ArrowUpRight } from '@/icons'

type ResourceTitleProps = {
  icon: React.ReactNode
  title: string
  description: string
  PathList: pathList[]
}

const ResourceTitle = (props: ResourceTitleProps) => {
  const { icon, title = '', description = '', PathList = [] } = props
  return (
    <div className="md:w-7/20 flex flex-col items-start gap-y-5 border-b-2 border-dark-400 pb-10 md:border-b-0">
      <div className="flex flex-col gap-y-6">
        <ResourceListItem title={title} description={description} icon={icon} />
        <Button
          iconStyle="p-0.5 md:size-6"
          icon={<ArrowUpRight color="#FFD11A" />}
        >
          Download {title} Now
        </Button>
      </div>
      <DownloadMileStone PathList={PathList} />
    </div>
  )
}

export default ResourceTitle
