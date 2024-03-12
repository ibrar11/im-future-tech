'use client'
import React, { useState } from 'react'
import { BlogPost, Container, SectionHeader } from '..'
import { ArrowUpRight } from '@/icons'
import { postList, tabs } from '../PostContentItem/postContentList'
import Slider from '../Slider'

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
        <div>
          <div className="lg:flex lg:justify-center">
            <Slider tabs={tabs} state={active} setState={handleActive} />
          </div>
          <div>
            {postList.map(
              (post) =>
                4 - post.id >= active && <BlogPost post={post} key={post.id} />,
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogPostSection
