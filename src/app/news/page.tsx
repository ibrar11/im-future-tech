import React from 'react'
import {
  FeaturedVideosSection,
  HeadlineSection,
  NewsBlogSection,
} from './newsComponents'
import { BlogPostSection } from '@/components'

const News = () => {
  return (
    <main>
      <HeadlineSection />
      <NewsBlogSection />
      <BlogPostSection
        headerTitle="Discover the World of Headlines"
        badgeTitle="Welcome to Our News Hub"
        headerButtonText="View All News"
        buttonText="Read More"
      />
      <FeaturedVideosSection />
    </main>
  )
}

export default News
