// @flow

import { forwardRef, useImperativeHandle, useRef } from 'react'
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha'

import { Typography } from '@/components'
import { getSiteKey } from '@/lib/recaptchaGetKey'
import clsx from 'clsx'

import s from './recaptcha.module.scss'

type Props = {
  className?: string
  isError?: null | string
  onChangeValue: (value: null | string) => void
}

export const Recaptcha = forwardRef(({ className, isError, onChangeValue }: Props, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null)

  const siteKey = getSiteKey()

  const onChangeHandler = (value: null | string) => {
    onChangeValue(value)
  }

  useImperativeHandle(ref, () => ({
    reset() {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
    },
  }))

  return (
    <div className={clsx(s.recaptchaWrapper, className, { [s.error]: isError })}>
      <ReCAPTCHA
        hl={'en'}
        onChange={onChangeHandler}
        ref={recaptchaRef}
        sitekey={siteKey}
        theme={'dark'}
      />
      {isError && (
        <Typography as={'span'} className={s.textError} option={'small_text'}>
          {isError}
        </Typography>
      )}
    </div>
  )
})
