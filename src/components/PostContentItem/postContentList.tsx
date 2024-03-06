import { EmptyChatBubble, EmptyHeart, Heart, ShareIconTrinangle } from '@/icons'

type InterActionBtn = {
  id: number
  number: number
  icon: React.ReactNode
}

export type PostContentType = {
  id: number
  path: string
  userName: string
  about: string
  date: string
  title: string
  description: string
  interactions: InterActionBtn[]
}

export type PostTabs = {
  id: number
  tab: string
}

export const tabs: PostTabs[] = [
  {
    id: 1,
    tab: 'All',
  },
  {
    id: 2,
    tab: 'Quantum Computing',
  },
  {
    id: 3,
    tab: 'AI Ethics',
  },
  {
    id: 4,
    tab: 'Space Exploration',
  },
  {
    id: 5,
    tab: 'Biotechnology',
  },
  {
    id: 6,
    tab: 'Renewable Energy',
  },
]

export const postList: PostContentType[] = [
  {
    id: 1,
    path: '/images/jhonTechson.png',
    userName: 'John Techson',
    about: 'Quantum Computing',
    date: 'October 15, 2023',
    title: 'The Quantum Leap in Computing',
    description:
      'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
    interactions: [
      { id: 1, number: 24500, icon: <Heart color="#FF5500" /> },
      { id: 2, number: 50, icon: <EmptyChatBubble /> },
      { id: 3, number: 20, icon: <ShareIconTrinangle /> },
    ],
  },
  {
    id: 2,
    path: '/images/sarahEthicist.png',
    userName: 'Sarah Ethicist',
    about: 'AI Ethics',
    date: 'November 5, 2023',
    title: 'The Ethical Dilemmas of AI',
    description:
      'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
    interactions: [
      { id: 1, number: 32000, icon: <EmptyHeart /> },
      { id: 2, number: 72, icon: <EmptyChatBubble /> },
      { id: 3, number: 18, icon: <ShareIconTrinangle /> },
    ],
  },
  {
    id: 3,
    path: '/images/astronomer.png',
    userName: 'Astronomer X',
    about: 'Space Exploration',
    date: 'December 10, 2023',
    title: 'The Mars Colonization Challenge',
    description:
      'Exploring the technical and logistical challenges of human colonization on Mars.',
    interactions: [
      { id: 1, number: 20000, icon: <EmptyHeart /> },
      { id: 2, number: 31, icon: <EmptyChatBubble /> },
      { id: 3, number: 120, icon: <ShareIconTrinangle /> },
    ],
  },
]
