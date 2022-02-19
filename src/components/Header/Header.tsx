import { FC } from 'react'
import { ActionCreatorsTypes, toggleSidebar } from '../../actions/recipeActions'
import HeaderNavLink from './HeaderNavLink'

interface HeaderProps {
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Header: FC<HeaderProps> = ({ dispatch }) => {
  return (
    <header className='header'>
      <div className='header__large'>
        <HeaderNavLink linkTo='/recipes'>Recipes</HeaderNavLink>
        <HeaderNavLink linkTo='/bookmarks'>Bookmarks</HeaderNavLink>
      </div>
      <div className='header__small'>
        <HeaderNavLink linkTo='/recipes'><i className='fas fa-home' /></HeaderNavLink>
        <HeaderNavLink linkTo='/bookmarks'><i className='fas fa-bookmark' /></HeaderNavLink>
        <button
          className='header__btn'
          onClick={() => dispatch(toggleSidebar())}>
          <i className='fas fa-sliders-h switch_img' />
        </button>
      </div>
    </header>
  )
}


export default Header