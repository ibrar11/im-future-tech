import React from 'react'
import { AchievementCard, Container } from '..'
import { informationHubData } from './informationHubData'

const InformationHub = () => {
  return (
    <div>
      <Container>
        <div className="rounded-2lg border-2 border-dark-400 p-2.5 2xl:p-5">
          <div className="flex flex-col gap-y-2.5 md:flex-row md:gap-x-2.5 2xl:gap-x-5">
            {informationHubData.map((item) => (
              <AchievementCard
                key={item.id}
                title={item.title}
                description={item.description}
                variant="secondary"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default InformationHub
