'use client'
import React, { useState } from 'react'
import { BlogPost, Container, SectionHeader } from '..'
import { ArrowUpRight } from '@/icons'
import { postList, tabs } from '../PostContentItem/postContentList'
import Slider from '../Slider'
import { LuSearchX } from 'react-icons/lu'

type BlogPostSectionProps = {
  headerTitle?: string
  badgeTitle?: string
  headerButtonText?: string
  buttonText?: string
}

const BlogPostSection = (props: BlogPostSectionProps) => {
  const {
    headerTitle = "Explore FutureTech's In-Depth Blog Posts",
    badgeTitle = 'A Knowledge Treasure Trove',
    headerButtonText = 'View All Blogs',
    buttonText,
  } = props
  const [active, setActive] = useState(1)

  const handleActive = (number: number): void => {
    setActive(number)
  }

  return (
    <section>
      <SectionHeader
        title={headerTitle}
        badgeTitle={badgeTitle}
        variant="primary"
        icon={<ArrowUpRight color="#FFD11A" />}
        linkText={headerButtonText}
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
                      <BlogPost
                        post={post}
                        key={post.id}
                        buttonText={buttonText}
                      />
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
