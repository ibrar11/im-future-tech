import React from 'react'
import { Container } from '..'

const FeaturesHeaderSection = () => {
  return (
    <section className="border-y-2 border-dark-400 bg-dark-400">
      <Container>
        <div className="flex flex-col gap-y-2.5 py-10 md:py-20 2xl:gap-y-4 2xl:py-32">
          <p className="w-max rounded bg-dark-500 px-2 py-1 text-sm font-normal text-white md:text-base 2xl:px-2.5 2xl:py-1.5 2xl:text-lg">
            Unlock the Power of
          </p>
          <h3 className="kumbh-font text-3xl font-medium text-white lg:text-4xl 2xl:text-6xl">
            FutureTech Features
          </h3>
        </div>
      </Container>
    </section>
  )
}

export default FeaturesHeaderSection
