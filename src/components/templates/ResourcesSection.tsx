import React from 'react'
import { ResourceList, SectionHeader } from '..'
import { ArrowUpRight } from '@/icons'

const ResourcesSection = () => {
  return (
    <section>
      <SectionHeader
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        badgeTitle="Your Gateway to In-Depth Information"
        linkText="View All Resources"
        icon={<ArrowUpRight color="#FFD11A" />}
      />
      <ResourceList />
    </section>
  )
}

export default ResourcesSection
