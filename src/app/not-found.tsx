import { Button, Container } from '@/components'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-y-5">
          <h2 className="kumbh-font text-7xl font-bold leading-normal text-white md:text-8xl">
            4<span className="text-yellow-200">0</span>4
          </h2>
          <p className="max-w-[550px] text-center text-base font-normal text-grey-300 md:text-xl">
            The page you are looking for might have been removed had its name
            changed or it is temporarily unavailable.
          </p>
          <Button href="/" variant="secondary">
            Home Page
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
