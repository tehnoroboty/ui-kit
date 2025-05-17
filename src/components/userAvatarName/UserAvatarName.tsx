import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components'
import { AvatarBox } from '@/components/avatar/AvatarBox'
import clsx from 'clsx'

import s from './userAvatarName.module.scss'

type Props = {
  url: string
  username: string
  usernameClassName?: string
} & ComponentPropsWithoutRef<'div'>
export const UserAvatarName = ({
  className,
  url = '',
  username = 'UserName',
  usernameClassName,
}: Props) => {
  return (
    <div className={clsx(s.userAvaName, className)}>
      <div className={s.userAva}>
        <AvatarBox size={'xs'} src={url} />
      </div>
      <div className={usernameClassName}>
        <Typography size={'m'} weight={'semi-bold'}>
          {username}
        </Typography>
      </div>
    </div>
  )
}
