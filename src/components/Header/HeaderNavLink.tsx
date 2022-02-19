import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface HeaderNavLinkProps {
  linkTo: string
}

const HeaderNavLink: FC<HeaderNavLinkProps> = ({ linkTo, children }) => {
  return (
    <NavLink
      className='header__btn'
      to={linkTo}>
      {children}
    </NavLink>
  )
}
export default HeaderNavLink