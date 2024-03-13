import { Container } from '@/components'
import React from 'react'

const HeadlineSection = () => {
  return (
    <section>
      <Container>
        <div className="kumbh-font md:py-15 flex flex-col gap-y-3.5 py-10 sm:gap-y-4 md:gap-y-5 lg:py-20 2xl:py-32">
          <h2 className="text-2.5xl xl:text-5.5xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Today's Headlines: Stay <span className="md:hidden">Informed</span>
          </h2>
          <div className="xl:gap-x-15 flex md:flex-row md:items-center md:gap-x-5 lg:gap-x-10 2xl:gap-x-20">
            <h2 className="xl:text-5.5xl hidden font-medium text-white sm:text-3xl md:block md:text-4xl lg:text-5xl">
              Informed
            </h2>
            <p className="inter-font text-sm font-normal leading-normal text-grey-200 md:text-base 2xl:text-lg">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeadlineSection
