import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CloseOutline } from '@/assets/componentsIcons'
import { Typography } from '@/components'
import { Close, Content, Overlay, Portal, Root, Title } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

import s from './dialog.module.scss'

export type DialogProps = {
  closeClassName?: string
  extraHeaderContent?: ReactNode
  isSimple?: boolean
  modalTitle?: string
  onClose: () => void
  onEdit?: () => void
  open: boolean
} & ComponentPropsWithoutRef<'div'>

export const Dialog = ({
  children,
  className,
  closeClassName,
  extraHeaderContent,
  isSimple = false,
  modalTitle,
  onClose,
  onEdit,
  open,
  ...rest
}: DialogProps) => {
  return (
    <Root onOpenChange={onClose} open={open} {...rest}>
      <Portal>
        <Overlay className={s.overlay} />
        <Content aria-describedby={undefined} className={clsx(s.content, className)}>
          {isSimple ? (
            <div>{children}</div>
          ) : (
            <div>
              {modalTitle ? (
                <Title asChild className={s.title}>
                  <Typography as={'h1'} option={'h1'}>
                    {modalTitle}
                  </Typography>
                </Title>
              ) : (
                <VisuallyHidden>
                  <Title asChild className={s.title}>
                    <Typography as={'h1'} option={'h1'}>
                      {modalTitle}
                    </Typography>
                  </Title>
                </VisuallyHidden>
              )}
              {extraHeaderContent}
              <Close
                className={clsx(
                  s.IconButton,
                  modalTitle ? s.IconButtonIn : s.IconButtonOut,
                  closeClassName
                )}
              >
                <CloseOutline className={s.icon} />
              </Close>
              {modalTitle && <hr className={s.lineHr} />}
              {children}
            </div>
          )}
        </Content>
      </Portal>
    </Root>
  )
}
