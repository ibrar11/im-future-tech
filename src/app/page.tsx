import { Container, FooterListItem } from '@/components'
import { footerListData } from '@/components/FooterListItem/footerList'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Container>
        <div>
          {footerListData.map((item) => (
            <FooterListItem
              key={item.id}
              title={item.title}
              subTitles={item.subTitles}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
