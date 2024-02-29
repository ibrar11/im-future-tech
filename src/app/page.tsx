import { Container, Button } from '@/components'
import { Eye } from '@/icons'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex gap-x-5">
          <Button icon={<Eye />} disabled>
            Preview
          </Button>
          <Button icon={<Eye />} variant="Secondary" disabled>
            Preview
          </Button>
          <Button variant="Secondary">Preview</Button>
        </div>
      </Container>
    </main>
  )
}
