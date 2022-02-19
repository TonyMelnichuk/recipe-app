import { FC } from 'react'
import preloaderImg from '../assets/preloader.svg'

const Preloader: FC = () => {
  return (
    <div className='preloader'>
      <img className='preloader__img' src={preloaderImg} alt='Preloader' />
    </div>
  )
}

export default Preloader