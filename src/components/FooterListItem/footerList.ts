export type SubTitles = {
  id: number
  item: string
  variant: string
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
]
