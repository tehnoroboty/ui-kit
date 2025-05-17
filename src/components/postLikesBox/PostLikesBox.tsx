import { ComponentPropsWithoutRef } from 'react'

import { AvatarBox, Typography } from '@/components'
import clsx from 'clsx'

import s from './postLikesBox.module.scss'

type Avatar = {
  createdAt: string
  fileSize: number
  height: number
  url: string
  width: number
}

export type PostLikesBoxProps = {
  avatars?: { url: string }[] | Avatar[]
  isAuth?: boolean
  likesCount?: number
} & ComponentPropsWithoutRef<'div'>

export const PostLikesBox = ({
  avatars = [],
  className,
  isAuth,
  likesCount,
}: PostLikesBoxProps) => {
  const firstThreeAvatars = avatars.slice(0, 3)
  const avatarClasses = [s.firstAvaLike, s.secondAvaLike, s.thirdAvaLike]

  return (
    <div className={clsx(s.postLikes, className)}>
      {avatars.length === 0 && (!likesCount || likesCount === 0) ? (
        <Typography as={'div'} className={s.likeCount}>
          {isAuth ? 'Be the first to like this' : 'No likes here yet'}
        </Typography>
      ) : (
        <>
          <div className={s.postLikesAvatars}>
            {firstThreeAvatars.map((avatar, index) => (
              <AvatarBox
                className={avatarClasses[index]}
                key={avatar.url}
                size={'xxs'}
                src={avatar.url}
              />
            ))}
          </div>
          <div className={s.likeCount}>
            <Typography as={'span'}>{likesCount}</Typography>
            <Typography as={'span'} option={'bold_text14'}>
              {likesCount && likesCount > 1 ? ` "Likes"` : ` "Like"`}
            </Typography>
          </div>
        </>
      )}
    </div>
  )
}
