import { Container, ResourceDescriptionItem, SectionHeader } from '@/components'
import { videosList } from '@/components/ResourceDescriptionItem/resourceDescriptions'
import { ArrowUpRight } from '@/icons'
import { tw } from '@/utils/Tw'
import React from 'react'

const FeaturedVideosSection = () => {
  return (
    <section>
      <SectionHeader
        title="Visual Insights for the Modern Viewer"
        badgeTitle="Featured Videos"
        linkText="View All"
        icon={<ArrowUpRight color="#FFD11A" />}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start">
          {videosList.map((item, index) => (
            <ResourceDescriptionItem
              key={item.id}
              path={item.path}
              alt={item.alt}
              title={item.title}
              description={item.description}
              styles={tw`md:py-15 flex-col-reverse !gap-y-5 border-dark-400 py-10 md:gap-y-0 2xl:py-20 ${index === 3 ? 'md:pl-12.5 2xl:pl-20 md:border-l-2 md:order-2 md:border-b-2' : index === 2 ? '2xl:pr-20 md:pr-12.5 md:order-1 md:border-b-2' : index === 1 ? 'md:order-4 md:border-b-0 md:pl-12.5 2xl:pl-20 md:border-l-2' : 'md:order-3 md:border-b-0 md:pr-12.5 2xl:pr-20'} ${index < videosList.length - 1 ? 'border-b-2' : ''}`}
              detailsStyles="sm:flex-col sm:!items-start !gap-y-1"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedVideosSection
