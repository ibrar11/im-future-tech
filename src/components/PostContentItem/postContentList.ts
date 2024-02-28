type PostContentItem = {
  id: number
  date: string
  title: string
  description: string
}

export const PostList: PostContentItem[] = [
  {
    id: 1,
    date: 'October 15, 2023',
    title: 'The Quantum Leap in Computing',
    description:
      'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
  },
  {
    id: 2,
    date: 'November 5, 2023',
    title: 'The Ethical Dilemmas of AI',
    description:
      'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
  },
  {
    id: 3,
    date: 'December 10, 2023',
    title: 'The Mars Colonization Challenge',
    description:
      'Exploring the technical and logistical challenges of human colonization on Mars.',
  },
]
