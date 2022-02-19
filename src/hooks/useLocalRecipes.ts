import { useEffect } from 'react'
import { ActionCreatorsTypes, setLocalRecipes } from '../actions/recipeActions'
import { RecipeType } from '../types/types'

export const useLocalRecipes = (
  dispatch: React.Dispatch<ActionCreatorsTypes>,
  localRecipes: RecipeType[],
  isFetching: boolean
) => {
  useEffect(() => {
    if (!isFetching) {
      if (localStorage.getItem('recipes') === null) localStorage.setItem('recipes', JSON.stringify([]))
      // @ts-ignore
      const LOCAL_RECIPES = JSON.parse(localStorage.getItem('recipes'))
      dispatch(setLocalRecipes(LOCAL_RECIPES))
    }
  }, [isFetching, dispatch])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(localRecipes))
  }, [localRecipes])
}