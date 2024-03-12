import {
  HeroSection,
  AchievementSection,
  FeaturesSection,
  BlogPostSection,
  ResourcesSection,
  FeedbackSection,
  InformationHubSection,
  Footer,
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
      <FeedbackSection />
      <InformationHubSection />
      <Footer />
    </main>
  )
}
