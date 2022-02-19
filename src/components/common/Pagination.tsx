import { FC } from 'react'
import { ActionCreatorsTypes, setCurrentPage, setPortionNumber } from '../../actions/recipeActions'

interface PaginationProps {
  totalRecipesCount: number
  pageSize: number
  portionSize: number
  currentPage: number
  isFetching: boolean
  portionNumber: number
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Pagination: FC<PaginationProps> = (props) => {
  const {
    totalRecipesCount,
    dispatch,
    pageSize,
    portionSize,
    currentPage,
    isFetching,
    portionNumber
  } = props

  const pagesCount = Math.ceil(totalRecipesCount / pageSize)

  // @ts-ignore
  const pages = [...Array(pagesCount + 1).keys()]

  const portionCount = Math.ceil(pagesCount / portionSize)
  const firstPortionButton = (portionNumber - 1) * portionSize + 1
  const lastPortionButton = portionNumber * portionSize

  const currentPortionButtons = pages
    .filter(page => page >= firstPortionButton && page <= lastPortionButton)

  return (
    <div className='pagination'>
      {portionNumber > 1 && (
        <button
          className='pagination__btn pagination__btn--side'
          onClick={() => dispatch(setPortionNumber(portionNumber - 1))}>
          {'<'}
        </button>
      )}

      {currentPortionButtons
        .map(page => (
          <button
            disabled={isFetching}
            className={`pagination__btn ${currentPage === page && !isFetching ? 'pagination__btn--active' : ''}`}
            onClick={() => dispatch(setCurrentPage(page))}
            key={page}>
            {page}
          </button>
        ))}

      {portionCount > portionNumber && (
        <button
          className='pagination__btn pagination__btn--side'
          onClick={() => dispatch(setPortionNumber(portionNumber + 1))}>
          {'>'}
        </button>)}
    </div>
  )
}

export default Pagination