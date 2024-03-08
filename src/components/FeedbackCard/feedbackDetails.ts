export type FeedbackDetails = {
  id: number
  username: string
  location: string
  imagePath: string
  alt: 'profile'
  feedback: string
}

export const feedbackDetails: FeedbackDetails[] = [
  {
    id: 1,
    username: 'Sarah Thompson',
    location: 'San Francisco, USA',
    imagePath: '/images/sarahThompson.png',
    alt: 'profile',
    feedback:
      'The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.',
  },
  {
    id: 2,
    username: 'Raj Patel',
    location: 'Mumbai, India',
    imagePath: '/images/rajPatel.png',
    alt: 'profile',
    feedback:
      'The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.',
  },
  {
    id: 3,
    username: 'Emily Adams',
    location: 'London, UK',
    imagePath: '/images/emilyAdams.png',
    alt: 'profile',
    feedback:
      'The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.',
  },
  {
    id: 4,
    username: 'Alan Jackson',
    location: 'Houston, USA',
    imagePath: '/images/alanJackson.png',
    alt: 'profile',
    feedback:
      'The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.',
  },
  {
    id: 5,
    username: 'Jessica Miller',
    location: 'Boston, USA',
    imagePath: '/images/jessicaMiller.png',
    alt: 'profile',
    feedback:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    id: 6,
    username: 'Diego Lopez',
    location: 'Barcelona, Spain',
    imagePath: '/images/diegoLopez.png',
    alt: 'profile',
    feedback:
      'The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.',
  },
]
