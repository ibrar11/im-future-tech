import { ItemDetails, details } from '../ResourceItemDetails/resourceDetails'

export type Description = {
  id: number
  title: string
  description: string
  path: string
  alt: string
  details: ItemDetails[]
}

type FeaturedVideos = {
  id: number
  title: string
  description: string
  path: string
  alt: string
}

export const descriptionList: Description[] = [
  {
    id: 1,
    title: 'Variety of Topics',
    description:
      'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
    path: '/images/virtualReality.png',
    alt: 'virtualReality',
    details: details[0].itemDeatils,
  },
  {
    id: 2,
    title: 'Topics Coverage',
    description:
      'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).',
    path: '/images/virtualMap.png',
    alt: 'virtualMap',
    details: details[1].itemDeatils,
  },
]

export const videosList: FeaturedVideos[] = [
  {
    id: 1,
    title: 'Breaking the Silence: Mental Health Awareness in the Workplace',
    description:
      'An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.',
    path: '/images/mentalHealth.png',
    alt: 'side brain view',
  },
  {
    id: 2,
    title: 'Revolutionizing Investment Strategies',
    description:
      'An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.',
    path: '/images/tradingGraph.png',
    alt: 'tradingGraph',
  },
  {
    id: 3,
    title: 'Mars Exploration: Unveiling Alien Landscapes',
    description:
      "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    path: '/images/marsView.png',
    alt: 'marsView',
  },
  {
    id: 4,
    title: 'Blockchain Explained: A Revolution in Finance',
    description:
      'Delve into the world of blockchain technology and its transformative impact on the financial industry.',
    path: '/images/blockChain.png',
    alt: 'blockChain',
  },
]
