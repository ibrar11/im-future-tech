import React from 'react'
import { HeadlineSection, NewsBlogSection } from './newsComponents'
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
    </main>
  )
}

export default News
