import React from 'react'
import { Container, Button } from '@/components'
import { Eye } from '@/icons'

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex gap-x-5">
          <Button icon={<Eye />}>Preview</Button>
          <Button variant="Secondary">Contact Us</Button>
          <Button icon={<Eye color="black" />} variant="Secondary">
            Preview
          </Button>
        </div>
      </Container>
    </main>
  )
}
