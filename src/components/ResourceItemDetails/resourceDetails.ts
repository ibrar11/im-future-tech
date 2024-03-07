export type ItemDetails = {
  styles?: string
  id: number
  title: string
  description: string
  variant?: 'preview' | ''
}

export type ItemDetailsList = {
  id: number
  itemDeatils: ItemDetails[]
}

export const details: ItemDetailsList[] = [
  {
    id: 1,
    itemDeatils: [
      {
        id: 1,
        title: 'Total Ebooks',
        description: 'Over 100 ebooks',
      },
      {
        id: 2,
        title: 'Download Formats',
        description: 'PDF format for access.',
        variant: 'preview',
        styles: 'sm:col-start-2 sm:col-end-4',
      },
      {
        id: 3,
        title: 'Average Author Expertise',
        description:
          'Ebooks are authored by renowned experts with an average of 15 years of experience',
        styles: 'sm:col-start-1 sm:col-end-4',
      },
    ],
  },
  {
    id: 2,
    itemDeatils: [
      {
        id: 1,
        title: 'Total Whitepapers',
        description: 'Over 50 whitepapers',
      },
      {
        id: 2,
        title: 'Download Formats',
        description: 'PDF format for access.',
        variant: 'preview',
        styles: 'sm:col-start-2 sm:col-end-4',
      },
      {
        id: 3,
        title: 'Average Author Expertise',
        description:
          'Whitepapers are authored by subject matter experts with an average of 20 years of experience.',
        styles: 'sm:col-start-1 sm:col-end-4',
      },
    ],
  },
]
