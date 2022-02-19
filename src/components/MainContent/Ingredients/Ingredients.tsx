import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AnimatePresence, motion } from 'framer-motion'
import useClickOutside from '../../../hooks/useClickOutside'
import { IngredientsType } from '../../../types/types'
import { ActionCreatorsTypes, setIngredientsModalData } from '../../../actions/recipeActions'

interface IngredientsProps {
  isOpen: boolean
  recipeLabel: string
  ingredients: IngredientsType[] | null
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Ingredients: FC<IngredientsProps> = (props) => {
  const {
    isOpen,
    recipeLabel,
    ingredients,
    dispatch
  } = props

  const node = useClickOutside(() => isOpen && dispatch(setIngredientsModalData('')))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='modal'
        >
          <motion.div
            className='modal__content'
            initial={{ scale: 0, opacity: 0, }}
            animate={{ scale: 1, opacity: 1, transition: { ease: 'easeOut', duration: .3 } }}
            exit={{ scale: 0, opacity: 0, transition: { ease: 'easeOut', duration: .3 } }}
            ref={node}
          >
            <div className='ingredients'>
              <div className='ingredients__header'>
                <h2 className='title ingredients__recipe-title'>{recipeLabel}</h2>
                <button
                  className='close-button ingredients__close-btn'
                  onClick={() => dispatch(setIngredientsModalData(''))}
                />
              </div>
              <ul className='ingredients__list'>
                {ingredients?.map(({ text }) => (
                  <li className='ingredients__list-item' key={uuidv4()}>{text}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Ingredients