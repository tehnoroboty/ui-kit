import { ComponentPropsWithoutRef } from 'react'

import Google from '@/assets/componentsIcons/GoogleSvgrepoCom1'
import { NEXT_PUBLIC_BASE_URL } from '@/lib/constants/oauth'
import { AuthRoutes } from '@/lib/constants/routing'
import { getClientId } from '@/lib/googleClientId'

type Props = {
  className?: string
  disabled?: boolean
  setDisabledButton: (value: boolean) => void
} & ComponentPropsWithoutRef<'button'>

export const GoogleOAuthButton = (props: Props) => {
  const { className, setDisabledButton, ...rest } = props

  const login = () => {
    setDisabledButton(true)
    const clientId = getClientId()
    const REDIRECT_URL = (NEXT_PUBLIC_BASE_URL as string) + AuthRoutes.OAUTH_GOOGLE
    const scope = 'email profile'
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=${scope}`

    window.location.assign(authUrl)
  }

  return (
    <button className={className} onClick={login} type={'button'} {...rest}>
      <Google height={36} viewBox={'0 0 24 24'} width={36} />
    </button>
  )
}
