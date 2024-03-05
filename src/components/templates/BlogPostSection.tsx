'use client'
import React, { useState } from 'react'
import {
  Button,
  Container,
  ListItem,
  PostContentItem,
  PostInteractableItem,
  SectionsHeader,
} from '..'
import { ArrowUpRight } from '@/icons'
import { postList, tabs } from '../PostContentItem/postContentList'
import Slider from '../Slider'

const BlogPostSection = () => {
  const [isActive, setIsActive] = useState(1)

  const handleIsActive = (index: number): void => {
    setIsActive(index)
  }

  return (
    <section>
      <SectionsHeader
        title="Explore FutureTech's In-Depth Blog Posts"
        titleTag="A Knowledge Treasure Trove"
        variant="Primary"
        icon={<ArrowUpRight color="#FFD11A" />}
        linkText="View All Blogs"
      />
      <Container>
        <div className="">
          <div className="py-5 lg:flex lg:justify-center">
            <Slider tabs={tabs} state={isActive} setState={setIsActive} />
          </div>
          <div>
            {postList.map((post) => (
              <div
                key={post.id}
                className="gap-y-7.5 flex flex-col border-t-2 border-dark-400 py-10 md:flex-row md:items-start md:gap-x-10"
              >
                <div className="md:w-3/10 flex flex-wrap items-center justify-between gap-x-3 gap-y-5 lg:w-1/4">
                  <ListItem
                    title={post.userName}
                    description={post.about}
                    path={post.path}
                    alt={post.about}
                  />
                  <span className="md:hidden">
                    <Button
                      href="/"
                      iconStyle="p-0.5 md:size-6"
                      icon={<ArrowUpRight />}
                    >
                      View Blog
                    </Button>
                  </span>
                </div>
                <div className="md:w-7/10 justify-between md:flex lg:w-3/4">
                  <div className="2xl:gap-y-7.5 md:max-w-7/10 xl:max-w-4/5 flex flex-col items-start gap-y-5 md:gap-y-6">
                    <PostContentItem
                      date={post.date}
                      title={post.title}
                      description={post.description}
                    />
                    <div className="flex items-center gap-x-2 2xl:gap-x-2.5">
                      {post.interactions.map((item) => (
                        <PostInteractableItem
                          key={item.id}
                          icon={item.icon}
                          number={item.number}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="hidden md:block">
                    <Button
                      href="/"
                      iconStyle="p-0.5 md:size-6"
                      icon={<ArrowUpRight />}
                    >
                      View Blog
                    </Button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogPostSection
