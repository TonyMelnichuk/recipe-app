import {
  SET_RECIPES,
  SET_LOCAL_RECIPES,
  SET_IS_FETCHING,
  SET_FORM_DATA,
  SET_CURRENT_PAGE,
  SET_PORTION_NUMBER,
  SET_PAGE_SIZE,
  SET_IS_REQUEST_LIMIT,
  SET_REQUEST_ERROR_MESSAGE,
  TOGGLE_SIDEBAR,
  TOGGLE_IS_BOOKMARKED,
  SET_INGREDIENTS_MODAL_DATA
} from '../actions/recipeActionCreatorsTypes'
import { ActionCreatorsTypes } from '../actions/recipeActions'
import { InitialStateType, RecipeType } from '../types/types'

export const initialState: InitialStateType = {
  recipes: [],
  localRecipes: [],
  isFetching: false,
  formData: {
    searchQuery: 'tomato',
    selectedDietTypes: [],
    caloriesRange: { min: 50, max: 1500 },
    ingredientsCount: 50,
  },
  currentPage: 1,
  pageSize: 12,
  isRequestLimit: false,
  requestErrorMessage: '',
  portionNumber: 1,
  isSidebarOpen: false,
  recipeIngredientsModalData: {
    isOpen: false,
    recipeLabel: '',
    ingredients: null
  }
}

export function recipesReducer(
  state: InitialStateType = initialState, 
  action: ActionCreatorsTypes
): InitialStateType {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes.map(({ recipe, ...rest }) => recipe)
      }
    case TOGGLE_IS_BOOKMARKED:
      // I wrote 'as' here because the find method will always return a recipe
      const activeRecipe = state.recipes.find(recipe => recipe.label === action.label) as RecipeType

      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          if (recipe.label === action.label) return { ...recipe, isBookmarked: !recipe.isBookmarked }
          return recipe
        }),

        localRecipes: action.isBookmarked
          ? state.localRecipes.filter(recipe => recipe.label !== action.label)
          : [...state.localRecipes, { ...activeRecipe, isBookmarked: true }]
      }
    case SET_LOCAL_RECIPES:
      return {
        ...state,
        recipes: state.recipes.map(({ isBookmarked, ...rest }) => ({
          ...rest,
          isBookmarked: action.recipes
            .find(({ label }) => label === rest.label) ? true : false
        })),
        localRecipes: action.recipes
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_FORM_DATA:
      return {
        ...state,
        formData: { ...action.formData }
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize
      }
    case SET_IS_REQUEST_LIMIT:
      return {
        ...state,
        isRequestLimit: action.isRequestLimit
      }
    case SET_REQUEST_ERROR_MESSAGE:
      return {
        ...state,
        requestErrorMessage: action.requestErrorMessage
      }
    case SET_PORTION_NUMBER:
      return {
        ...state,
        portionNumber: action.portionNumber
      }
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.isOpen !== undefined ? action.isOpen : !state.isSidebarOpen
      }
    case SET_INGREDIENTS_MODAL_DATA:
      let recipe = state.recipes.find(recipe => recipe.label === action.recipeLabel)
      if (!recipe) recipe = state.localRecipes.find(recipe => recipe.label === action.recipeLabel)

      return {
        ...state,
        recipeIngredientsModalData: (action.recipeLabel)
          ? { isOpen: true, recipeLabel: action.recipeLabel, ingredients: recipe!.ingredients }
          : { isOpen: false, recipeLabel: '', ingredients: null }
      }
    default:
      return state
  }
}