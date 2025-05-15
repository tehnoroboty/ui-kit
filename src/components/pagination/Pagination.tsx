import { useEffect } from 'react'

import { Button, Typography } from '@/components'
import { SelectBox } from '@/components/select/SelectBox'
import { PAGE_SIZE_OPTIONS } from '@/lib/constants/pagination'
import clsx from 'clsx'

import s from './pagination.module.scss'

import ArrowLeftIcon from '../../assets/componentsIcons/ArrowIosBackOutline'
import ArrowRightIcon from '../../assets/componentsIcons/ArrowIosForwardOutline'
import { DOTS, usePagination } from './usePagination'

type PaginationProps = {
  className?: string
  /**
   * represents the current active page
   * */
  currentPage: number
  /**
   * callback function invoked with the updated page value when the page is changed
   * */
  onPageChange: (page: number) => void
  /**
   * callback function is called when the value changes*/
  onPageSizeChange: (size: number) => void
  /**
   * represents the maximum data that is visible in a single page
   * */
  pageSize: number
  /**
   * represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.*/
  siblingCount?: number
  /**
   * represents the total count of data available from the source
   * */
  totalCount: number
}

export const Pagination = (props: PaginationProps) => {
  const {
    className,
    currentPage: propCurrentPage,
    onPageChange,
    onPageSizeChange,
    pageSize,
    siblingCount = 1,
    totalCount,
  } = props

  // Корректируем currentPage, если оно превышает totalPageCount
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const currentPage = propCurrentPage > totalPageCount ? 1 : propCurrentPage

  // Если после корректировки currentPage изменилось, вызываем onPageChange
  useEffect(() => {
    if (propCurrentPage > totalPageCount && totalPageCount > 0) {
      onPageChange(1)
    }
  }, [propCurrentPage, totalPageCount, onPageChange])

  const handlePageSizeChange = (value: string) => {
    const newSize = Number(value)

    if (isNaN(newSize)) {
      return
    }

    onPageSizeChange(newSize)
    onPageChange(1)
  }

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }
  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div className={clsx(s.container, className)}>
      <nav aria-label={'Pagination'}>
        <ul className={s.paginationContainer}>
          <li className={s.paginationItem}>
            <Button
              aria-label={'Previous page'}
              className={clsx(s.button, s.buttonArrow)}
              disabled={currentPage === 1}
              onClick={onPrevious}
              variant={'transparent'}
            >
              <ArrowLeftIcon className={s.arrowIcon} />
            </Button>
          </li>
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <li className={clsx(s.paginationItem, s.dots)} key={`dots-${index}`}>
                  {DOTS}
                </li>
              )
            }

            return (
              <li className={s.paginationItem} key={pageNumber}>
                <Button
                  aria-current={pageNumber === currentPage ? 'page' : undefined}
                  className={clsx(s.button, {
                    [s.selected]: pageNumber === currentPage,
                  })}
                  onClick={() => onPageChange(pageNumber as number)}
                  variant={'transparent'}
                >
                  {pageNumber}
                </Button>
              </li>
            )
          })}
          <li className={s.paginationItem}>
            <Button
              aria-label={'Next page'}
              className={clsx(s.button, s.buttonArrow)}
              disabled={currentPage === lastPage}
              onClick={onNext}
              variant={'transparent'}
            >
              <ArrowRightIcon className={s.arrowIcon} />
            </Button>
          </li>
        </ul>
      </nav>
      <div className={s.selectContainer}>
        <Typography>Show</Typography>
        <SelectBox
          className={s.select}
          isPagination
          onChangeValue={handlePageSizeChange}
          options={PAGE_SIZE_OPTIONS}
        />
        <Typography>on page</Typography>
      </div>
    </div>
  )
}
