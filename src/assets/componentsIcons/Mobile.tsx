import { Ref, type SVGProps, forwardRef, memo } from 'react'

const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={36}
    ref={ref}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M24 1.5H12C9.93 1.5 8.25 3.18 8.25 5.25V30.75C8.25 32.82 9.93 34.5 12 34.5H24C26.07 34.5 27.75 32.82 27.75 30.75V5.25C27.75 3.18 26.07 1.5 24 1.5ZM18 33C16.755 33 15.75 31.995 15.75 30.75C15.75 29.505 16.755 28.5 18 28.5C19.245 28.5 20.25 29.505 20.25 30.75C20.25 31.995 19.245 33 18 33ZM24.75 27H11.25V6H24.75V27Z'
      }
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMobile)
const Memo = memo(ForwardRef)

export default Memo
