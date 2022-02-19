import { FC } from 'react'
import { ActionCreatorsTypes, setIngredientsModalData, toggleIsBookmarked } from '../../../actions/recipeActions'
import { RecipeType } from '../../../types/types'

interface RecipePropsType extends RecipeType {
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Recipe: FC<RecipePropsType> = (props) => {
  const {
    image,
    label,
    isBookmarked,
    calories,
    yield: serving,
    dietLabels,
    ingredients,
    dispatch
  } = props
  
  return (
    <div className='recipe'>
      <div className='recipe__img-wrapper'>
        <img className='recipe__img' src={image} alt={label} />
      </div>
      <div className='recipe__content'>
        <div className='recipe__header'>
          <h2 className='title recipe__title' data-tip={label}>{label}</h2>
          <button
            className='recipe__bookmarked-btn'
            onClick={() => dispatch(toggleIsBookmarked(label, Boolean(isBookmarked)))}>
            <i className={(isBookmarked ? 'fas' : 'far') + ' fa-bookmark'}/>
          </button>
        </div>
        <div className='recipe__inner'>
          <ul className='recipe__description'>
            <li className='recipe__info'>
              <p className='recipe__description-title'>Calories:</p>
              {Math.round(calories / serving)} / Serving
            </li>
            <li className='recipe__info'>
              <p className='recipe__description-title'>Diet:</p>
              {dietLabels?.length >= 1
                ? dietLabels.map(dietLabel => dietLabel).join(', ')
                : 'Unknown'}
            </li>
            <li className='recipe__info'>
              <p className='recipe__description-title'>Ingredients:</p>
              {ingredients.length}
            </li>
            <li className='recipe__info'>
              <p className='recipe__description-title'>Servings:</p>
              {serving}
            </li>
          </ul>
          <button
            className='recipe__btn-more'
            onClick={() => dispatch(setIngredientsModalData(label))}>
            More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recipe