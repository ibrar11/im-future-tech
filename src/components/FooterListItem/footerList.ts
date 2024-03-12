export type SubTitles = {
  id: number
  item: string
  variant?: string
}

type FooterList = {
  id: number
  title: string
  subTitles: SubTitles[]
}

export const footerListData: FooterList[] = [
  {
    id: 1,
    title: 'Home',
    subTitles: [
      {
        id: 1,
        item: 'Features',
        variant: 'withoutNewTag',
      },
      {
        id: 2,
        item: 'Blogs',
        variant: 'withoutNewTag',
      },
      {
        id: 3,
        item: 'Resources',
        variant: 'withNewTag',
      },
      {
        id: 4,
        item: 'Testimonials',
        variant: 'withoutNewTag',
      },
      {
        id: 5,
        item: 'Contact Us',
        variant: 'withoutNewTag',
      },
      {
        id: 6,
        item: 'Newsletter',
        variant: 'withoutNewTag',
      },
    ],
  },
  {
    id: 2,
    title: 'News',
    subTitles: [
      {
        id: 1,
        item: 'Trending Stories',
        variant: 'withoutNewTag',
      },
      {
        id: 2,
        item: 'Featured Videos',
        variant: 'withoutNewTag',
      },
      {
        id: 3,
        item: 'Technology',
        variant: 'withoutNewTag',
      },
      {
        id: 4,
        item: 'Health',
        variant: 'withoutNewTag',
      },
      {
        id: 5,
        item: 'Politics',
        variant: 'withoutNewTag',
      },
      {
        id: 6,
        item: 'Environment',
        variant: 'withoutNewTag',
      },
    ],
  },
  {
    id: 3,
    title: 'Podcasts',
    subTitles: [
      {
        id: 1,
        item: 'AI Revolution',
        variant: 'withoutNewTag',
      },
      {
        id: 2,
        item: 'AI Revolution',
        variant: 'withNewTag',
      },
      {
        id: 3,
        item: 'TechTalk AI',
        variant: 'withoutNewTag',
      },
      {
        id: 4,
        item: 'AI Conversations',
        variant: 'withoutNewTag',
      },
    ],
  },
  {
    id: 4,
    title: 'Home',
    subTitles: [
      {
        id: 1,
        item: 'Blogs',
        variant: 'withoutNewTag',
      },
      {
        id: 2,
        item: 'Quantum Computing',
        variant: 'withoutNewTag',
      },
      {
        id: 3,
        item: 'AI Ethics',
        variant: 'withoutNewTag',
      },
      {
        id: 4,
        item: 'Space Exploration',
        variant: 'withoutNewTag',
      },
      {
        id: 5,
        item: 'Biotechnology',
        variant: 'withNewTag',
      },
      {
        id: 6,
        item: 'Renewable Energy',
        variant: 'withoutNewTag',
      },
      {
        id: 7,
        item: 'Biohacking',
        variant: 'withoutNewTag',
      },
    ],
  },
  {
    id: 5,
    title: 'Resources',
    subTitles: [
      {
        id: 1,
        item: 'Whitepapers',
      },
      {
        id: 2,
        item: 'Ebooks',
      },
      {
        id: 3,
        item: 'Reports',
      },
      {
        id: 4,
        item: 'Research Papers',
      },
      {
        id: 5,
        item: 'Contact Us',
      },
    ],
  },
]
