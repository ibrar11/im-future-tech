import { FilledLinkdin, FilledMedium, FilledTwitter } from '@/icons'

type SocialLinks = {
  id: number
  icon: React.ReactNode
}

export const socialLinks: SocialLinks[] = [
  {
    id: 1,
    icon: <FilledTwitter />,
  },
  {
    id: 2,
    icon: <FilledMedium />,
  },
  {
    id: 3,
    icon: <FilledLinkdin />,
  },
]
