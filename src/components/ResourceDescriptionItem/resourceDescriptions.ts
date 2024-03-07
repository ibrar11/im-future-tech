import { ItemDetails, details } from '../ResourceItemDetails/resourceDetails'

export type Description = {
  id: number
  title: string
  description: string
  path: string
  alt: string
  details: ItemDetails[]
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
