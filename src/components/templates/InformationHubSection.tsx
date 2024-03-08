import React from 'react'
import { InformationHubHeader } from '..'
import InformationHub from '../InformationHub/InformationHub'

const InformationHubSection = () => {
  return (
    <section className="md:gap-y-12.5 2xl:gap-y-25 flex flex-col gap-y-10 border-y-2 border-dark-400 bg-dark-300 py-10 md:py-20">
      <InformationHubHeader />
      <InformationHub />
    </section>
  )
}

export default InformationHubSection
