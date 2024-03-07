import React from 'react'
import { FeedbackItem, ListItem } from '..'
import { FeedbackDetails } from './feedbackDetails'

type FeedbackCardProps = {
  feedback: FeedbackDetails
}

const FeedbackCard = (props: FeedbackCardProps) => {
  const { feedback } = props
  return (
    <div
      className={`gap-y-7.5 sm:py-15 flex flex-col items-center justify-start border-dark-400 py-10 ${feedback.id % 2 === 0 ? 'sm:border-l-2 sm:pl-10' : 'sm:pr-10'} 2xl:gap-y-10 ${feedback.id > 3 ? 'hidden sm:flex' : feedback.id === 3 ? 'border-b-0' : 'border-b-2'} ${feedback.id === 1 || feedback.id === 4 ? 'lg:border-x-0 lg:pr-10' : feedback.id === 2 || feedback.id === 5 ? 'lg:border-l-2 lg:px-10' : 'lg:border-l-2 lg:pl-10'}`}
    >
      <ListItem
        title={feedback.username}
        description={feedback.location}
        path={feedback.imagePath}
        alt={feedback.alt}
      />
      <FeedbackItem description={feedback.feedback} />
    </div>
  )
}

export default FeedbackCard
