import { FormDataType, RecipeType, ResponseRecipeType } from '../types/types'

import {
  SET_RECIPES,
  TOGGLE_IS_BOOKMARKED,
  SET_LOCAL_RECIPES,
  SET_IS_FETCHING,
  SET_FORM_DATA,
  SET_CURRENT_PAGE,
  SET_PORTION_NUMBER,
  SET_PAGE_SIZE,
  SET_IS_REQUEST_LIMIT,
  SET_REQUEST_ERROR_MESSAGE,
  TOGGLE_SIDEBAR,
  SET_INGREDIENTS_MODAL_DATA,
} from './recipeActionCreatorsTypes'

type SetRecipesType = { type: typeof SET_RECIPES, recipes: ResponseRecipeType[] }
type ToggleIsBookmarkedType = { type: typeof TOGGLE_IS_BOOKMARKED, label: string, isBookmarked: boolean }
type SetLocalRecipesType = { type: typeof SET_LOCAL_RECIPES, recipes: RecipeType[] }
type SetIsFetchingType = { type: typeof SET_IS_FETCHING, isFetching: boolean }
type SetFormDataType = { type: typeof SET_FORM_DATA, formData: FormDataType }
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
type SetPageSizeType = { type: typeof SET_PAGE_SIZE, pageSize: number }
type SetIsRequestLimitType = { type: typeof SET_IS_REQUEST_LIMIT, isRequestLimit: boolean }
type SetRequestErrorMessageType = { type: typeof SET_REQUEST_ERROR_MESSAGE, requestErrorMessage: string }
type SetPortionNumberType = { type: typeof SET_PORTION_NUMBER, portionNumber: number }
type ToggleSidebarType = { type: typeof TOGGLE_SIDEBAR, isOpen?: boolean }
type SetIngredientsModalDataType = { type: typeof SET_INGREDIENTS_MODAL_DATA, recipeLabel: string }

export type ActionCreatorsTypes =
  | SetRecipesType
  | ToggleIsBookmarkedType
  | SetLocalRecipesType
  | SetIsFetchingType
  | SetFormDataType
  | SetCurrentPageType
  | SetPageSizeType
  | SetIsRequestLimitType
  | SetRequestErrorMessageType
  | SetPortionNumberType
  | ToggleSidebarType
  | SetIngredientsModalDataType


export const setRecipes = (recipes: ResponseRecipeType[]): SetRecipesType => ({ type: SET_RECIPES, recipes })
export const toggleIsBookmarked = (label: string, isBookmarked: boolean): ToggleIsBookmarkedType => ({ type: TOGGLE_IS_BOOKMARKED, label, isBookmarked })
export const setLocalRecipes = (recipes: RecipeType[]): SetLocalRecipesType => ({ type: SET_LOCAL_RECIPES, recipes })
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({ type: SET_IS_FETCHING, isFetching })
export const setFormData = (formData: FormDataType): SetFormDataType => ({ type: SET_FORM_DATA, formData })
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setPageSize = (pageSize: number): SetPageSizeType => ({ type: SET_PAGE_SIZE, pageSize })
export const setIsRequestLimit = (isRequestLimit: boolean): SetIsRequestLimitType => ({ type: SET_IS_REQUEST_LIMIT, isRequestLimit })
export const setRequestErrorMessage = (requestErrorMessage: string): SetRequestErrorMessageType => ({ type: SET_REQUEST_ERROR_MESSAGE, requestErrorMessage })
export const setPortionNumber = (portionNumber: number): SetPortionNumberType => ({ type: SET_PORTION_NUMBER, portionNumber })
export const toggleSidebar = (isOpen?: boolean): ToggleSidebarType => ({ type: TOGGLE_SIDEBAR, isOpen })
export const setIngredientsModalData = (recipeLabel: string): SetIngredientsModalDataType => ({ type: SET_INGREDIENTS_MODAL_DATA, recipeLabel })
