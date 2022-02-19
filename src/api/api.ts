export const getRecipes = (
  searchQuery: string,
  currentPage: number,
  pageSize: number,
  ingredientsCount: string,
  calories: string,
  dietLabel: string[] | string
) => {
  return fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=${(currentPage - 1) * pageSize}&to=${currentPage * pageSize}&${ingredientsCount}&${calories}${dietLabel}`)
}