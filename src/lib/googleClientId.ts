import { NEXT_PUBLIC_GOOGLE_CLIENT_ID } from '@/lib/constants/oauth'

export const getClientId = () => {
  const clientId = NEXT_PUBLIC_GOOGLE_CLIENT_ID

  if (!clientId) {
    throw new Error('Google clientId is not defined')
  }

  return clientId
}
