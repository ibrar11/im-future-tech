import { DuoElipticalPlus, DuoBricksTriangle } from '@/icons'

type FeatureTitle = {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

export const featureTitles: FeatureTitle[] = [
  {
    id: 1,
    icon: <DuoElipticalPlus />,
    title: 'Future Technology Blog',
    description:
      'Stay informed with our blog section dedicated to future technology.',
  },
  {
    id: 2,
    icon: <DuoBricksTriangle />,
    title: 'Research Insights Blogs',
    description:
      'Dive deep into future technology concepts with our research section.',
  },
]
