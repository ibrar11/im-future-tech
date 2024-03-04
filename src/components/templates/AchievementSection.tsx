import React from 'react'
import { AchievementCard, Container } from '..'
import { achievements } from '../AchievementCard/achievementList'
import { tw } from '@/utils/Tw'

const AchievementSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row md:justify-start">
          {achievements.map((item, index) => (
            <AchievementCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              subHeading={item.subHeading}
              styles={tw`border-t-2 border-dark-400 ${index === 0 ? 'md:pr-2 lg:pr-10 xl:pr-20 2xl:pr-28' : index === achievements.length - 1 ? 'md:grow md:pl-2 border-l-2 border-dark-400 lg:pl-10 xl:pl-12.5 2xl:pl-28' : '2xl:px-28 xl:px-20 lg:px-10 md:px-2 border-l-2 border-dark-400'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AchievementSection
