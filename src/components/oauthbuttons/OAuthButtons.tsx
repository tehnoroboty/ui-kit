import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

import clsx from 'clsx'

import s from './oAuthButton.module.scss'

import { GitHubOAuthButton } from './githubOAuthButton/GitHubOAuthButton'
import { GoogleOAuthButton } from './googleOAuthButton/GoogleOAuthButton'

type Props = {
  className?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<'div'>

export const OAuthButtons = (props: Props) => {
  const { className, disabled = false, ...rest } = props

  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    setDisabledButton(disabled)
  }, [disabled])

  return (
    <div className={clsx(s.container, className)} {...rest}>
      <GoogleOAuthButton
        className={s.button}
        disabled={disabledButton}
        setDisabledButton={setDisabledButton}
      />

      <GitHubOAuthButton
        className={s.button}
        disabled={disabledButton}
        setDisabledButton={setDisabledButton}
      />
    </div>
  )
}
