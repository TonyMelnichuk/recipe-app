import { FC } from 'react'
import { DietType } from '../../../types/types'

interface CheckboxItemProps {
  checkboxValue: DietType
  activeCheckboxesValues: DietType[]
  onCheckboxChange: (checkboxValue: DietType) => void
}

const CheckboxItem: FC<CheckboxItemProps> = (props) => {
  const {
    checkboxValue,
    activeCheckboxesValues,
    onCheckboxChange
  } = props

  const handleCheckboxEnter = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') onCheckboxChange(checkboxValue)
  }

  return (
    <li 
      className='checkbox__item' 
      tabIndex={0}
      onKeyPress={handleCheckboxEnter}
    >
      <input
        type='checkbox'
        className='checkbox__input'
        checked={activeCheckboxesValues.includes(checkboxValue)}
        onChange={e => onCheckboxChange(e.target.name as DietType)}
        name={checkboxValue}
        id={checkboxValue}
      />
      <span className='checkbox__span' />
      <label htmlFor={checkboxValue} className='checkbox__label'>{checkboxValue}</label>
    </li>
  )
}

export default CheckboxItem