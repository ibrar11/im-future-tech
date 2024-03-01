export type NavLink = {
  id: number
  link: string
  to: string
}

export const links: NavLink[] = [
  {
    id: 1,
    link: 'Home',
    to: '/',
  },
  {
    id: 2,
    link: 'News',
    to: '/news',
  },
  {
    id: 3,
    link: 'Podcasts',
    to: '/podcasts',
  },
  {
    id: 4,
    link: 'Resources',
    to: '/resources',
  },
]
