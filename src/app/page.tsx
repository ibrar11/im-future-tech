import React from 'react'
import {
  HeroSection,
  AchievementSection,
  FeaturesSection,
  BlogPostSection,
  ResourcesSection,
  FeedbackSection,
} from '@/components'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AchievementSection />
      <FeaturesSection />
      <BlogPostSection />
      <ResourcesSection />
      <FeedbackSection />
    </main>
  )
}
