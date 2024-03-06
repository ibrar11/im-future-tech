'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { PostTabs } from './PostContentItem/postContentList'

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
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={tab.id}
            onClick={() => setState && setState(tab.id)}
          >
            <div
              className={`w-38 py-4.5 flex cursor-pointer items-center justify-center rounded-md border-2 border-dark-400 text-sm font-normal ${index + 1 === state ? 'text-white' : 'text-grey-300'} transition-all hover:bg-dark-400 hover:text-grey-500 focus:text-grey-600 focus:ring focus:ring-dark-700 active:bg-dark-300 active:text-grey-400 2xl:text-lg`}
            >
              {tab.tab}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
