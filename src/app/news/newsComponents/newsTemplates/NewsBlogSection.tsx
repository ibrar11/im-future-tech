import React from 'react'
import { Container } from '@/components'
import { newsBlogList } from '../NewsBlog/newsBlogList'
import { NewsBlog } from '..'

const NewsBlogSection = () => {
  const primaryBlog = newsBlogList?.find((item) => item?.variant === 'primary')

  return (
    <section>
      <Container>
        <div className="flex flex-col">
          <div className="border-t-2 border-dark-400 py-10">
            <NewsBlog
              title={primaryBlog?.title}
              path={primaryBlog?.img}
              alt={primaryBlog?.alt}
              description={primaryBlog?.description}
              likes={primaryBlog?.likes}
              share={primaryBlog?.share}
              variant="primary"
              otherDetails={primaryBlog?.details}
            />
          </div>
          <div className="gap-y-7.5 md:gap-x-7.5 flex flex-col border-t-2 border-dark-400 py-10 md:flex-row lg:justify-between">
            {newsBlogList.map(
              (blog) =>
                blog.variant === 'secondary' && (
                  <NewsBlog
                    key={blog.id}
                    title={blog.title}
                    path={blog.img}
                    alt={blog.alt}
                    description={blog.description}
                    likes={blog.likes}
                    share={blog.share}
                    variant="secondary"
                    otherDetails={blog.details}
                  />
                ),
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsBlogSection
