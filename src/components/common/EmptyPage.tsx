import { FC } from 'react'
import emptyImg from '../assets/empty.svg'

interface EmptyPageProps {
  text: string
}

const EmptyPage: FC<EmptyPageProps> = ({ text }) => {
  return (
    <div className='empty-page'>
      <h2 className='title empty-page__text'>{text}</h2>
      <img className='empty-page__img' src={emptyImg} alt='Empty Page'/>
    </div>
  )
}

export default EmptyPage