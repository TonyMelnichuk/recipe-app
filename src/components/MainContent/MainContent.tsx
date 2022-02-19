import { FC, useEffect } from 'react'
import Recipes from './Recipes/Recipes'
import Bookmarks from './Bookmarks/Bookmarks'
import { Route, Switch, Redirect } from 'react-router-dom'
import { InitialStateType } from '../../types/types'
import Ingredients from './Ingredients/Ingredients'
import { useLocalRecipes } from '../../hooks/useLocalRecipes'
import { getRecipes } from '../../api/api'
import {
  setIsFetching,
  setWrongSearch,
  setRecipes,
  toggleSidebar,
  setRequestLimitError,
  ActionCreatorsTypes
} from '../../actions/recipeActions'
import EmptyPage from '../common/EmptyPage'

interface MainContentProps {
  state: InitialStateType
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const MainContent: FC<MainContentProps> = ({ state, dispatch }) => {
  const {
    formData,
    currentPage,
    pageSize,
    requestLimitErrorText
  } = state

  useLocalRecipes(dispatch, state.localRecipes, state.isFetching)

  useEffect(() => { 
    const fetchRecipes = async () => {
      try {
        dispatch(setIsFetching(true))

        const dietLabels = formData.selectedDietTypes.length >= 1
          ? formData.selectedDietTypes.map(selectedDietType => '&diet=' + selectedDietType).join('')
          : ''
        const ingredientsCount = '&ingr=' + formData.ingredientsCount
        const calories = `calories=${formData.caloriesRange.min}-${formData.caloriesRange.max}`
        const searchQuery = formData.searchQuery

        const response = await getRecipes(searchQuery, currentPage, pageSize, ingredientsCount, calories, dietLabels)
        const data = await response.json()

        !data.more
          ? dispatch(setWrongSearch('No recipes match your search'))
          : dispatch(setWrongSearch(''))

        dispatch(setRecipes(data.hits))
        dispatch(setIsFetching(false))
        dispatch(toggleSidebar(false))
      } catch {
        dispatch(setRequestLimitError('Request limit error. Please wait'))
      }
    }
    fetchRecipes()
  }, [currentPage, requestLimitErrorText, formData, pageSize, dispatch])

  return (
    <section className='main-content'>
      <Switch>
        <Redirect exact from='/' to='/recipes' />
        <Route exact path='/recipes' render={() => <Recipes state={state} dispatch={dispatch} />} />
        <Route
          exact
          path='/bookmarks'
          render={() => (
            <Bookmarks
              localRecipes={state.localRecipes}
              dispatch={dispatch}
            />)}
        />
        <Route render={() => <EmptyPage text='404 Not Found'/>} />
      </Switch>
      <Ingredients
        {...state.recipeIngredientsModalData}
        dispatch={dispatch}
      />
    </section>
  )
}

export default MainContent