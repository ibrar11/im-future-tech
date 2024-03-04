import React from 'react'
import { Button, Container, EndorsementItem, UsersPhotoList } from '..'
import { items } from '../EdorsementItem/endorsementList'
import { PathList } from '../DownloadMileStone/photoPathList'
import { ArrowUpRight } from '@/icons'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-13/20 lg:pt-25 2xl:pt-37.5 lg:gap-y-25 flex flex-col gap-y-8 pt-10 md:border-r-2 md:border-dark-400">
            <div className="flex max-w-[800px] flex-col gap-y-3.5 sm:pr-5 md:gap-y-5 2xl:max-w-[893px] 2xl:gap-y-8">
              <p className="kumbh-font md:text-1.5xl text-lg font-medium leading-tight text-grey-300 sm:text-xl sm:leading-tight md:leading-tight 2xl:text-3xl 2xl:leading-tight">
                Your Journey to Tomorrow Begins Here
              </p>
              <div className="flex flex-col gap-y-2.5 md:gap-y-3.5 2xl:gap-y-5">
                <h1 className="kumbh-font xl:text-5.5xl text-3xl font-medium leading-tight text-white sm:text-4xl sm:leading-tight md:leading-tight lg:text-5xl lg:leading-tight xl:leading-tight 2xl:text-7xl 2xl:leading-tight">
                  Explore the Frontiers of Artificial Intelligence
                </h1>
                <p className="text-sm font-normal leading-normal text-grey-200 md:text-base 2xl:text-lg">
                  Welcome to the epicenter of AI innovation. FutureTech AI News
                  is your passport to a world where machines think, learn, and
                  reshape the future. Join us on this visionary expedition into
                  the heart of AI.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-t-2 border-dark-400 lg:justify-start lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24">
              {items.map((item, index) => (
                <EndorsementItem
                  key={item.id}
                  number={item.number}
                  text={item.text}
                  index={index}
                  lastIndex={items.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-7/20 md:pb-12.5 md:px-12.5 pt-25 sm:pt-37.5 relative flex flex-col justify-end gap-y-5 px-6 pb-10 sm:items-start sm:px-10 2xl:gap-y-8">
            <UsersPhotoList
              PathList={PathList}
              styles="bg-dark-300 border-2 border-dark-400"
            />
            <div className="flex flex-col gap-y-1 md:gap-y-1.5 2xl:gap-y-3.5">
              <p className="text-lg font-medium text-white md:text-xl 2xl:text-2xl">
                Explore 1000+ resources
              </p>
              <p className="text-sm font-normal text-grey-200 md:text-base 2xl:text-lg">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>
            <Button
              href="/news"
              iconStyle="p-0.5"
              icon={<ArrowUpRight color="#FFD11A" />}
            >
              Explore Resources
            </Button>
            <div className="bg-hero-pattern absolute -left-4 bottom-0 right-0 top-0 -z-50 max-h-[422px] overflow-hidden bg-cover opacity-40 md:left-0"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
