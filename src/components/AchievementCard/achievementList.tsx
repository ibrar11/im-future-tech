import { DuoLoadingIcon, DuoDoubleLeaf, DuoInfinityCross } from '@/icons'

interface BenefitsListItem {
  icon: React.ReactNode
  id: number
  title: string
  subHeading: string
  description: string
}

export const achievements: BenefitsListItem[] = [
  {
    id: 1,
    title: 'Latest News Updates',
    subHeading: 'Stay Current',
    description: 'Over 1,000 articles published monthly',
    icon: <DuoLoadingIcon />,
  },
  {
    id: 2,
    title: 'Expert Contributors',
    subHeading: 'Trusted Insights',
    description: '50+ renowned AI experts on our team',
    icon: <DuoInfinityCross />,
  },
  {
    id: 3,
    title: 'Global Readerships',
    subHeading: 'Worldwide Impact',
    description: '2 million monthly readers',
    icon: <DuoDoubleLeaf />,
  },
]
