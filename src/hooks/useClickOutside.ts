import { useEffect, useRef } from 'react'

const useClickOutside = (handle: () => void): React.RefObject<any> => {
  const domNode = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handlePossibleClick = (event: TouchEvent | MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) handle()
    }

    document.addEventListener('mousedown', handlePossibleClick)

    return () => document.removeEventListener('mousedown', handlePossibleClick)
  })

  return domNode
}

export default useClickOutside