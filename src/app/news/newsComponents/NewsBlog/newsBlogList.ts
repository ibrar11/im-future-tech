export type otherDetails = {
  id: number
  title: string
  content: string
}

type NewBlogList = {
  id: number
  img: string
  alt: string
  title: string
  description: string
  likes: number
  share: number
  variant: 'primary' | 'secondary'
  details: otherDetails[]
}

export const newsBlogList: NewBlogList[] = [
  {
    id: 1,
    img: '/images/windMills.png',
    alt: 'windMills',
    title: 'Global Climate Summit Addresses Urgent Climate Action',
    description:
      'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
    likes: 14000,
    share: 204,
    variant: 'primary',
    details: [
      {
        id: 1,
        title: 'Category',
        content: 'Environment',
      },
      {
        id: 2,
        title: 'Publication Date',
        content: 'October 10, 2023',
      },
      {
        id: 3,
        title: 'Author',
        content: 'Jane Smith',
      },
    ],
  },
  {
    id: 2,
    img: '/images/politicalHandShake.png',
    alt: 'politicalHandShake',
    title: 'A Decisive Victory for Progressive Policies',
    description: 'Politics',
    likes: 22000,
    share: 60,
    variant: 'secondary',
    details: [
      {
        id: 1,
        title: 'Category',
        content: 'Environment',
      },
      {
        id: 2,
        title: 'Publication Date',
        content: 'October 10, 2023',
      },
      {
        id: 3,
        title: 'Author',
        content: 'Jane Smith',
      },
    ],
  },
  {
    id: 3,
    img: '/images/aiGirl.png',
    alt: 'aiGirl',
    title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
    description: 'Technology',
    likes: 6000,
    share: 92,
    variant: 'secondary',
    details: [
      {
        id: 1,
        title: 'Category',
        content: 'Environment',
      },
      {
        id: 2,
        title: 'Publication Date',
        content: 'October 10, 2023',
      },
      {
        id: 3,
        title: 'Author',
        content: 'Jane Smith',
      },
    ],
  },
  {
    id: 3,
    img: '/images/covid19.png',
    alt: 'covid19',
    title: 'COVID-19 Variants',
    description: 'Health',
    likes: 10000,
    share: 124,
    variant: 'secondary',
    details: [
      {
        id: 1,
        title: 'Category',
        content: 'Environment',
      },
      {
        id: 2,
        title: 'Publication Date',
        content: 'October 10, 2023',
      },
      {
        id: 3,
        title: 'Author',
        content: 'Jane Smith',
      },
    ],
  },
]
