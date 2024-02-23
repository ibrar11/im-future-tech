import { FeatureTitle, Container } from '@/components'
import { featureTitles } from '@/data/featureTitleData'

export default function Home() {
  return (
    <main>
      <Container>
        <div>
          {featureTitles.map((item, index) => (
            <FeatureTitle
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
