import { DuoLoadingIcon, DuoDoubleLeaf, DuoInfinityCross } from '@/icons'

interface BenefitsListItem {
  icon: React.ReactNode
  title: string
  subHeading: string
  description: string
}

export const achievements: BenefitsListItem[] = [
  {
    title: 'Latest News Updates',
    subHeading: 'Stay Current',
    description: 'Over 1,000 articles published monthly',
    icon: <DuoLoadingIcon />,
  },
  {
    title: 'Expert Contributors',
    subHeading: 'Trusted Insights',
    description: '50+ renowned AI experts on our team',
    icon: <DuoInfinityCross />,
  },
  {
    title: 'Global Readerships',
    subHeading: 'Worldwide Impact',
    description: '2 million monthly readers',
    icon: <DuoDoubleLeaf />,
  },
]
