import {
  HeroSection,
  AchievementSection,
  FeaturesSection,
  BlogPostSection,
  ResourcesSection,
} from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AchievementSection />
      <FeaturesSection />
      <BlogPostSection />
      <ResourcesSection />
    </main>
  )
}
