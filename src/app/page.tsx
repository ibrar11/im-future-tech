import {
  HeroSection,
  AchievementSection,
  FeaturesSection,
  BlogPostSection,
} from '@/components'
import React from 'react'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AchievementSection />
      <FeaturesSection />
      <BlogPostSection />
    </main>
  )
}
