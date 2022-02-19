import { FC } from 'react'
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid'
import Preloader from '../../common/Preloader'
import Pagination from '../../common/Pagination'
import { InitialStateType } from '../../../types/types'
import { ActionCreatorsTypes } from '../../../actions/recipeActions'
import EmptyPage from '../../common/EmptyPage'

interface RecipesProps {
  state: InitialStateType
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Recipes: FC<RecipesProps> = ({ state, dispatch }) => {
  const {
    isFetching,
    wrongSearchAlertText,
    recipes,
    pageSize,
    currentPage,
    portionNumber
  } = state

  if (isFetching) return <Preloader />
  else if (wrongSearchAlertText !== '') return <EmptyPage text={wrongSearchAlertText} />

  return (
    <>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            {...recipe}
            dispatch={dispatch}
            key={uuidv4()}
          />
        ))}
      </div>
      <Pagination
        totalRecipesCount={100}
        pageSize={pageSize}
        portionSize={4}
        currentPage={currentPage}
        isFetching={isFetching}
        portionNumber={portionNumber}
        dispatch={dispatch}
      />
    </>
  )
}

export default Recipes