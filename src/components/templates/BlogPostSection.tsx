'use client'
import React, { useState } from 'react'
import { BlogPost, Container, SectionsHeader } from '..'
import { ArrowUpRight } from '@/icons'
import { postList, tabs } from '../PostContentItem/postContentList'
import Slider from '../Slider'

const BlogPostSection = () => {
  const [isActive, setIsActive] = useState(1)

  return (
    <section>
      <SectionsHeader
        title="Explore FutureTech's In-Depth Blog Posts"
        titleTag="A Knowledge Treasure Trove"
        variant="primary"
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
              <BlogPost post={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogPostSection
