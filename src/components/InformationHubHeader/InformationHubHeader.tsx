import React from 'react'
import { Badge, Container } from '..'
import { DuoLargeCircularBlade } from '@/icons'

const InformationHubHeader = () => {
  return (
    <div>
      <Container>
        <div className="lg:gap-x-15 flex flex-col gap-y-5 sm:flex-row sm:gap-x-10">
          <div className="flex gap-x-5">
            <span
              className={`w-15 h-15 lg:w-30 col-span-1 flex items-center justify-center self-center sm:w-20 md:w-24`}
            >
              <DuoLargeCircularBlade />
            </span>
            <span className="flex items-center sm:hidden">
              <Badge badgeTitle="Learn, Connect, and Innovate" />
            </span>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <span className="hidden sm:flex sm:items-center">
              <Badge badgeTitle="Learn, Connect, and Innovate" />
            </span>
            <div className="flex flex-col gap-y-5">
              <h3 className="kumbh-font text-2.5xl font-medium text-white lg:text-4xl 2xl:text-6xl">
                Be Part of the Future Tech Revolution
              </h3>
              <p className="text-sm font-normal leading-relaxed text-grey-300 md:text-base 2xl:text-lg">
                Immerse yourself in the world of future technology. Explore our
                comprehensive resources, connect with fellow tech enthusiasts,
                and drive innovation in the industry. Join a dynamic community
                of forward-thinkers.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InformationHubHeader
