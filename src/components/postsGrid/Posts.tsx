import { ReactNode } from 'react'

import ImageNotFound from '@/assets/componentsIcons/ImageNotFound'
import { Carousel } from '@/components'
import { Item } from '@/lib/types/types'

import s from './posts.module.scss'

type ImageType = {
  height?: number
  url: string
  width?: number
}

type PostType = {
  id: number
  images: ImageType[]
}

type Props = {
  onPostClick?: (postId: number) => void
  posts: (Item | PostType)[]
  renderEmptyImagePlaceholder?: () => ReactNode
}

export const Posts = ({ onPostClick, posts, renderEmptyImagePlaceholder }: Props) => {
  const renderImgCarousel = (img: ImageType, index: number) => {
    return (
      <img
        alt={'Post image'}
        height={228}
        loading={index === 0 ? 'eager' : 'lazy'}
        src={img.url}
        width={234}
      />
    )
  }

  return (
    <div className={s.postsGrid}>
      {posts.map(post => (
        <div
          className={s.image}
          key={post.id}
          onClick={() => onPostClick?.(post.id)}
          role={'button'}
        >
          {post.images.length > 0 ? (
            <Carousel list={post.images} renderItem={renderImgCarousel} size={'large'} />
          ) : (
            renderEmptyImagePlaceholder?.() ?? (
              <div className={s.notFound}>
                <ImageNotFound height={194} width={199} />
                <div>
                  <b>No Image</b>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  )
}
