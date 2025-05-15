import { NEXT_PUBLIC_SITE_KEY } from '@/lib/constants/captcha'

export const getSiteKey = () => {
  const siteKey = NEXT_PUBLIC_SITE_KEY

  if (!siteKey) {
    throw new Error('reCAPTCHA site key is not defined')
  }

  return siteKey
}
