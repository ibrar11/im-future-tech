import React from 'react'
import { ArrowUpRight } from '@/icons'
import { Container } from '..'
import Link from 'next/link'

const TopBanner = () => {
  return (
    <section className="bg-dark-200">
      <Container>
        <div className="flex items-center justify-center">
          <Link
            href={'/'}
            className="flex w-max items-start justify-center gap-x-2.5 pb-3.5 pt-10 sm:py-2 md:py-3"
          >
            <p className="text-sm font-normal  leading-normal text-grey-300 underline-offset-1 hover:underline sm:text-base sm:leading-normal md:text-lg md:leading-normal">
              Subscribe to our Newsletter For New & latest Blogs and Resources
            </p>
            <span className="flex size-5 items-center justify-center p-0.5 md:size-6">
              <ArrowUpRight color="#FFD11A" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default TopBanner
