'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { PostTabs } from './PostContentItem/postContentList'
import { Button } from '.'

type SliderProps = {
  tabs?: PostTabs[]
  state?: number
  setState?(index: number): void
}

const Slider = (props: SliderProps) => {
  const { tabs = [], state, setState } = props
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={14}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {tabs.map((tab) => (
          <SwiperSlide
            key={tab.id}
            onClick={() => setState && setState(tab.id)}
          >
            <Button
              active={tab.id === state ? true : false}
              onClick={() => setState && setState(tab.id)}
              styles="min-w-38 2xl:px-16 md:px-12.5 py-5 2xl:py-7.5 md:py-6"
            >
              {tab.tab}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
