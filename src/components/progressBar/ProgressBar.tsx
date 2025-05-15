import { useLayoutEffect } from 'react'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

type ProgressBarProps = {
  status?: 'error' | 'idle' | 'loading' | 'success'
}

export const ProgressBar = ({ status }: ProgressBarProps) => {
  NProgress.configure({
    easing: 'ease',
    minimum: 0.1,
    showSpinner: false,
    speed: 500,
    trickleSpeed: 800,
  })

  const handleStart = () => NProgress.start()
  const handleComplete = () => NProgress.done()

  useLayoutEffect(() => {
    if (status === 'loading') {
      handleStart()
    } else {
      handleComplete()
    }

    return () => {
      NProgress.remove()
    }
  }, [status])

  return null
}
