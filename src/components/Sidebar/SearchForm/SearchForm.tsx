import React, { FC, useState, useRef } from 'react'
import { ActionCreatorsTypes, setCurrentPage, setFormData, setPortionNumber } from '../../../actions/recipeActions'
import InputRange from 'react-input-range'
import { v4 as uuidv4 } from 'uuid'
import 'react-input-range/lib/css/index.css'
import { CaloriesRangeType, DietType } from '../../../types/types'
import { useHistory, useLocation } from 'react-router-dom'
import CheckboxItem from './CheckboxItem'

const dietOptions = ['balanced', 'high-protein', 'low-fat', 'low-carb', 'high-fiber', 'low-sodium']

interface SearchFormProps {
  isFetching: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const SearchForm: FC<SearchFormProps> = ({ isFetching, dispatch }) => {
  const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [ingredientsCount, setIngredientsCount] = useState<number>(50)
  const [caloriesRange, setCaloriesRange] = useState<CaloriesRangeType>({ min: 50, max: 1500 })
  const [selectedDietTypes, setSelectedDietTypes] = useState<DietType[]>([])

  const cn = require('classnames')

  const searchInput = useRef<HTMLInputElement | null>(null)

  const history = useHistory()
  const { pathname } = useLocation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery === '') {
      setIsEmptySearch(true)
      searchInput.current!.focus()
      return
    }

    const formData = {
      searchQuery,
      selectedDietTypes,
      ingredientsCount,
      caloriesRange
    }

    dispatch(setFormData(formData))
    searchInput.current!.blur()
    setSearchQuery('')
    dispatch(setCurrentPage(1))
    dispatch(setPortionNumber(1))
    pathname !== '/recipes' && history.push('/recipes')
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsEmptySearch(false)
  }

  const handleSetActiveDietTypes = (dietType: DietType) => {
    selectedDietTypes.includes(dietType)
      ? setSelectedDietTypes(selectedDietTypes.filter(selectedDietType => selectedDietType !== dietType))
      : setSelectedDietTypes([...selectedDietTypes, dietType])
  }

  const handleIngredientsCountChange = (ingredientsCount: number) => {
    setIngredientsCount(ingredientsCount)
  }

  const handleCaloriesRangeChange = (caloriesRange: CaloriesRangeType) => {
    setCaloriesRange(caloriesRange)
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className={cn('search-form__input', { 'search-form__input--wrong': isEmptySearch })}
        name='searchQuery'
        onBlur={() => setIsEmptySearch(false)}
        ref={searchInput}
        placeholder='FOOD NAME...'
        autoComplete='off'
        onChange={handleSearchInputChange}
        type='text'
        value={searchQuery}
      />
      <label className='title' htmlFor='diet'>SELECT DIET</label>
      <div className='checkboxes'>
        <ul className='checkboxes__list'>
          {dietOptions.map(dietOption => (
            <CheckboxItem
              activeCheckboxesValues={selectedDietTypes}
              checkboxValue={dietOption as DietType}
              onCheckboxChange={handleSetActiveDietTypes}
              key={uuidv4()}
            />
          ))}
        </ul>
      </div>
      <div className='search-form__range-items'>
        <label className='title' htmlFor='ingredientsCount'>Ingredients Count</label>
        <InputRange
          maxValue={100}
          minValue={0}
          name='ingredientsCount'
          value={ingredientsCount}
          onChange={value => handleIngredientsCountChange(value as number)}
        />
        <label className='title' htmlFor='caloriesRange'>Calories Range</label>
        <InputRange
          maxValue={2000}
          minValue={0}
          name='caloriesRange'
          value={caloriesRange}
          onChange={value => handleCaloriesRangeChange(value as CaloriesRangeType)}
        />
      </div>
      <button className='search-form__submit-btn' disabled={isFetching} type='submit'>Search</button>
    </form>
  )
}

export default SearchForm
