import React from 'react'
import { Container, ResourceCard, ResourceTitle } from '..'
import { resourceTitleData } from '../ResourceTitle/resourceTitleData'

const ResourceList = () => {
  return (
    <div>
      <Container>
        <div>
          {resourceTitleData.map((item, index) => (
            <div
              key={item.id}
              className={`lg:gap-x-15 flex flex-col border-dark-400 py-10 md:flex-row md:items-center md:gap-x-5 md:py-0 2xl:gap-x-20 ${index === resourceTitleData.length - 1 ? '' : 'border-b-2'}`}
            >
              <ResourceTitle
                title={item.title}
                icon={item.icon}
                description={item.description}
                PathList={item.PathList}
              />
              <ResourceCard
                title={item.resourceDescription.title}
                description={item.resourceDescription.description}
                path={item.resourceDescription.path}
                alt={item.resourceDescription.alt}
                details={item.resourceDescription.details}
                index={index}
                lastIndex={resourceTitleData.length - 1}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ResourceList
