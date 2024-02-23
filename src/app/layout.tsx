import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'FutureTech',
  description:
    'FutureTech is a bloging platform to stay up to date with the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/CircularBlade.svg" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
