import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <a className='footer__email' href='mailto: recipe@gmail.com'>recipe@gmail.com</a>
      <p className='footer__copyright'>Copyright © 2021. All rights reserved.</p>
    </footer>
  )
}

export default Footer