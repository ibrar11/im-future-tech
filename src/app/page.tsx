import {
  HeroSection,
  AchievementSection,
  FeaturesHeaderSection,
  FeaturesSection,
} from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AchievementSection />
      <FeaturesHeaderSection />
      <FeaturesSection />
    </main>
  )
}
