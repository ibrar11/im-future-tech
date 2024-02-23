import { DuoElipticalPlus, DuoBricksTriangle } from '@/icons'

type FeatureTitle = {
  icon: React.ReactNode
  title: string
  description: string
}

export const featureTitles: FeatureTitle[] = [
  {
    icon: <DuoElipticalPlus />,
    title: 'Future Technology Blog',
    description:
      'Stay informed with our blog section dedicated to future technology.',
  },
  {
    icon: <DuoBricksTriangle />,
    title: 'Research Insights Blogs',
    description:
      'Dive deep into future technology concepts with our research section.',
  },
]
