import { FC, useEffect, useState } from 'react'
import { ActionCreatorsTypes, setIsRequestLimit } from '../../actions/recipeActions'

interface RequestLimitErrorProps {
  isRequestLimit: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const RequestLimitError: FC<RequestLimitErrorProps> = ({ dispatch }) => {
  const [seconds, setSeconds] = useState<number>(60)

  useEffect(() => {
    // I write the 'setInterval' instead of the recursive 'setTimeout' because if I use the 'setTimeout' and if user leaves a website page (switching tabs), the 'setTimeout' works with a delay and it can`t keep up with an animation.
    const timer = setInterval(() => {
      setSeconds(seconds => seconds - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (seconds <= 0) {
      dispatch(setIsRequestLimit(false))
      setSeconds(60)
    }
  }, [seconds, dispatch])

  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='timer'>
          <h3 className='title timer__title'>Request limit. Please wait.</h3>
          <div className='timer__inner'>
            <svg className='timer__svg'>
              <circle className='timer__svg-circle' cx='75' cy='75' r='40' />
            </svg>
            <p className='timer__count'>{seconds}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestLimitError