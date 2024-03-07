import { DuoDoubleTripizum, DuoFllipedDoubleD } from '@/icons'
import {
  Description,
  descriptionList,
} from '../ResourceDescriptionItem/resourceDescriptions'

type ResourceTitleData = {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  PathList: pathList[]
  resourceDescription: Description
}

export const resourceTitleData: ResourceTitleData[] = [
  {
    id: 1,
    icon: <DuoFllipedDoubleD />,
    title: 'Ebooks',
    description:
      'Explore our collection of ebooks covering a wide spectrum of future technology topics.',
    PathList: [
      { id: 1, path: '/images/skyShirtBoy.png', alt: 'skyShirtBoy' },
      { id: 2, path: '/images/jhonTechsonBordered.png', alt: 'jhonTechson' },
      { id: 3, path: '/images/sarahBordered.png', alt: 'sarahEthicist' },
      { id: 4, path: '/images/astronomerBordered.png', alt: 'astronomer' },
    ],
    resourceDescription: descriptionList[0],
  },
  {
    id: 2,
    icon: <DuoDoubleTripizum />,
    title: 'Whitepapers',
    description:
      'Dive into comprehensive reports and analyses with our collection of whitepapers.',
    PathList: [
      { id: 1, path: '/images/aleena.png', alt: 'aleena' },
      { id: 2, path: '/images/ahmed.png', alt: 'ahmed' },
      { id: 3, path: '/images/ahsan.png', alt: 'ahsan' },
      { id: 4, path: '/images/bismith.png', alt: 'bismith' },
    ],
    resourceDescription: descriptionList[1],
  },
]
