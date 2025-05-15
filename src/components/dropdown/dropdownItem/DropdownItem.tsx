import type { ElementType, ReactNode } from 'react'

import { Button, Typography } from '@/components'
import clsx from 'clsx'

import s from './dropdownItem.module.scss'

type Props = {
  Icon: ElementType
  href?: string
  isActive?: boolean
  onClick?: () => void
  title: ReactNode | string
}

export const DropdownItem = ({ Icon, href, isActive, onClick, title }: Props) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Button
      as={href ? 'a' : 'button'}
      className={s.item}
      href={href}
      onClick={onClickHandler}
      variant={'transparent'}
    >
      <Icon className={clsx(s.icon, { [s.active]: isActive })} />
      <Typography
        as={'span'}
        className={clsx(s.itemTitle, { [s.active]: isActive })}
        option={'bold_text14'}
      >
        {title}
      </Typography>
    </Button>
  )
}
