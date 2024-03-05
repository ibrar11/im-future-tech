import {
  HeroSection,
  AchievementSection,
  FeaturesHeaderSection,
  FeaturesSection,
  BlogPostSection,
} from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AchievementSection />
      <FeaturesHeaderSection />
      <FeaturesSection />
      <BlogPostSection />
    </main>
  )
}
