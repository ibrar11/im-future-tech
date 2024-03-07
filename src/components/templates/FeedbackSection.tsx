import React from 'react'
import { Container, FeedbackCard, SectionHeader } from '..'
import { ArrowUpRight } from '@/icons'
import { feedbackDetails } from '../FeedbackCard/feedbackDetails'

const FeedbackSection = () => {
  return (
    <section>
      <SectionHeader
        title="Real Words from Real Readers"
        badgeTitle="What Our Readers Say"
        linkText="View All Testimonials"
        icon={<ArrowUpRight color="#FFD11A" />}
      />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {feedbackDetails.map((item) => (
            <FeedbackCard key={item.id} feedback={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeedbackSection
