type ResourceItemDetails = {
  styles?: string
  id: number
  title: string
  description: string
  variant?: string
}

export const details: ResourceItemDetails[] = [
  {
    id: 1,
    title: 'Total Ebooks',
    description: 'Over 100 ebooks',
    styles: '',
  },
  {
    id: 2,
    title: 'Download Formats',
    description: 'PDF format for access.',
    variant: 'withButton',
    styles: '',
  },
  {
    id: 3,
    title: 'Average Author Expertise',
    description:
      'Ebooks are authored by renowned experts with an average of 15 years of experience',
    styles: '',
  },
]
