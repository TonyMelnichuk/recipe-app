import { FC } from 'react'
import SearchForm from './SearchForm/SearchForm'
import { ActionCreatorsTypes, toggleSidebar } from '../../actions/recipeActions' 

interface SidebarProps {
  isSidebarOpen: boolean
  isFetching: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, isFetching, dispatch }) => {
  const cn = require('classnames')

  return (
    <aside className={cn('sidebar', { 'sidebar--active': isSidebarOpen })}>
      <button
        className='close-button sidebar__close-btn'
        onClick={() => dispatch(toggleSidebar())}
      />
      <SearchForm isFetching={isFetching} dispatch={dispatch} />
    </aside>
  )
}

export default Sidebar