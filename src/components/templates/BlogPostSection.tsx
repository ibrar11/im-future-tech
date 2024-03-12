'use client'
import React, { useState } from 'react'
import { BlogPost, Container, SectionHeader } from '..'
import { ArrowUpRight } from '@/icons'
import { postList, tabs } from '../PostContentItem/postContentList'
import Slider from '../Slider'
import { LuSearchX } from 'react-icons/lu'

const BlogPostSection = () => {
  const [active, setActive] = useState(1)

  const handleActive = (number: number): void => {
    setActive(number)
  }

  return (
    <section>
      <SectionHeader
        title="Explore FutureTech's In-Depth Blog Posts"
        badgeTitle="A Knowledge Treasure Trove"
        variant="primary"
        icon={<ArrowUpRight color="#FFD11A" />}
        linkText="View All Blogs"
      />
      <Container>
        <div className="flex flex-col">
          <div className="lg:flex lg:justify-center">
            <Slider tabs={tabs} state={active} setState={handleActive} />
          </div>
          <>
            {active >= 4 ? (
              <div className="self-center p-10">
                <div className="rounded-2lg flex max-w-fit flex-col items-center justify-center bg-yellow-200 p-2">
                  <LuSearchX className="size-20" />
                  <p className="text-center text-base font-normal md:text-lg 2xl:text-xl">
                    Result Not Found. Select other tabs
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {postList.map(
                  (post) =>
                    4 - post.id >= active && (
                      <BlogPost post={post} key={post.id} />
                    ),
                )}
              </div>
            )}
          </>
        </div>
      </Container>
    </section>
  )
}

export default BlogPostSection
