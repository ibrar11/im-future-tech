import { ArrowUpRight } from '@/icons'
import React from 'react'
import { Button, ListItem, PostContentItem } from '..'
import { PostContentType } from '../PostContentItem/postContentList'

type BlogPostProps = {
  post: PostContentType
}

const BlogPost = (props: BlogPostProps) => {
  const { post } = props
  return (
    <div
      key={post?.id}
      className="gap-y-7.5 flex flex-col border-t-2 border-dark-400 py-10 md:flex-row md:items-start md:gap-x-10"
    >
      <div className="md:w-3/10 flex flex-wrap items-center justify-between gap-x-3 gap-y-5 lg:w-1/4 xl:w-1/5">
        <ListItem
          title={post?.userName}
          description={post?.about}
          path={post?.path}
          alt={post?.about}
        />
        <span className="md:hidden">
          <Button href="/" iconStyle="p-0.5 md:size-6" icon={<ArrowUpRight />}>
            View Blog
          </Button>
        </span>
      </div>
      <PostContentItem post={post} />
    </div>
  )
}

export default BlogPost
