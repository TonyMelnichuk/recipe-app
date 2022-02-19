export type IngredientsType = {
  text: string
  quantity: number
  measure: string
  food: string
  weight: number
  foodId: string
}

export type RecipeType = {
  uri: string
  label: string
  image: string
  source: string
  url: string
  shareAs: string
  yield: number
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  isBookmarked?: boolean
  ingredients: IngredientsType[]
  calories: number
  totalWeight: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
  totalNutrients: {}
  totalDaily: {}
  digest: [
    {
      label: string
      tag: string
      schemaOrgTag: string
      total: number
      hasRDI: true
      daily: number
      unit: string
      sub: {}
    }
  ]
}

export type ResponseRecipeType = {
  recipe: RecipeType
  _links: {
    self: {
      href: string
      title: string
    }
    next: {
      href: string
      title: string
    }
  }
}

export type DietType = 'balanced' | 'high-protein' | 'low-fat' | 'low-carb' | 'high-fiber' | 'low-sodium' 

export type FormDataType = {
  searchQuery: string
  selectedDietTypes: DietType[]
  caloriesRange: { min: number, max: number }
  ingredientsCount: number
}

export type CaloriesRangeType = { min: number, max: number }

export type InitialStateType = {
  recipes: RecipeType[]
  localRecipes: RecipeType[]
  isFetching: boolean
  formData: FormDataType
  currentPage: number
  pageSize: number
  requestLimitErrorText: string
  wrongSearchAlertText: string
  portionNumber: number
  isSidebarOpen: boolean
  recipeIngredientsModalData: {
    isOpen: boolean
    recipeLabel: string
    ingredients: IngredientsType[] | null
  }
}