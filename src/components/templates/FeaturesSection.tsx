import React from 'react'
import {
  Container,
  Divider,
  FeatureCard,
  FeatureTitle,
  SectionsHeader,
} from '..'
import { features } from '../FeatureTitle/featuresData'

const FeaturesSection = () => {
  return (
    <section>
      <SectionsHeader
        titleTag="Unlock the Power of"
        title="FutureTech Features"
      />
      <Container>
        <div>
          {features.map((item) => (
            <div className="flex flex-col items-center sm:flex-row sm:border-b-2 sm:border-dark-400">
              <FeatureTitle
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
                styles="sm:w-7/20 pr-15"
              />
              <div className="sm:w-13/20 sm:py-15 sm:pl-15 flex flex-col gap-y-2.5 border-y-2 border-dark-400 px-4 py-8 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5 sm:border-y-0 sm:border-l-2 sm:pr-0">
                {item.features.map((feature) => (
                  <FeatureCard
                    key={feature.id}
                    description={feature.description}
                    title={feature.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection
