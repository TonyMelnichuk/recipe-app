import { FC } from 'react'
import Recipe from '../Recipes/Recipe'
import { v4 as uuidv4 } from 'uuid'
import { ActionCreatorsTypes } from '../../../actions/recipeActions'
import { RecipeType } from '../../../types/types'
import EmptyPage from '../../common/EmptyPage'

interface BookmarksProps {
  localRecipes: RecipeType[]
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Bookmarks: FC<BookmarksProps> = ({ localRecipes, dispatch }) => {
  if (!localRecipes || localRecipes.length === 0) return <EmptyPage text='Bookmarks Are Empty' />

  return (
    <div className='recipes'>
      {localRecipes.map(recipe => (
        <Recipe
          {...recipe}
          dispatch={dispatch}
          key={uuidv4()}
        />
      ))}
    </div>
  )
}

export default Bookmarks
