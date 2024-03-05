import { DuoElipticalPlus, DuoBricksTriangle } from '@/icons'

type Features = {
  id: number
  title: string
  description: string
}

type FeatureData = {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  features: Features[]
}

export const features: FeatureData[] = [
  {
    id: 1,
    icon: <DuoElipticalPlus />,
    title: 'Future Technology Blog',
    description:
      'Stay informed with our blog section dedicated to future technology.',
    features: [
      {
        id: 1,
        title: 'Quantity',
        description:
          'Over 1,000 articles on emerging tech trends and breakthroughs.',
      },
      {
        id: 2,
        title: 'Variety',
        description:
          'Articles cover fields like AI, robotics, biotechnology, and more.',
      },
      {
        id: 3,
        title: 'Frequency',
        description: 'Fresh content added daily to keep you up to date.',
      },
      {
        id: 4,
        title: 'Authoritative',
        description:
          'Written by our team of tech experts and industry professionals.',
      },
    ],
  },
  {
    id: 2,
    icon: <DuoBricksTriangle />,
    title: 'Research Insights Blogs',
    description:
      'Dive deep into future technology concepts with our research section.',
    features: [
      {
        id: 1,
        title: 'Depth',
        description: '500+ research articles for in-depth understanding.',
      },
      {
        id: 2,
        title: 'Graphics',
        description: 'Visual aids and infographics to enhance comprehension.',
      },
      {
        id: 3,
        title: 'Trends',
        description: 'Explore emerging trends in future technology research.',
      },
      {
        id: 4,
        title: 'Contributors',
        description: 'Contributions from tech researchers and academics.',
      },
    ],
  },
]
