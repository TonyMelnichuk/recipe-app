import { FC, useRef, useReducer, useEffect } from 'react'
import './style.scss'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import { initialState, recipesReducer } from './reducers/recipesReducer'
import Header from './components/Header/Header'
import RequestLimitError from './components/RequestLimitError/RequestLimitError'
import Footer from './components/Footer/Footer'

// ! Коли я залю проект на git, подивитись чи там нема файлів: .env, packageJSON, бо я їх наче добавав в gitignore


const App: FC = () => {
  const [state, dispatch] = useReducer(recipesReducer, initialState)

  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // scroll to top when page changes
    if (pageRef.current) pageRef.current.scrollTo(0, 0)
  }, [state.currentPage])

  return (
    <div className='page' ref={pageRef}>
      <Header dispatch={dispatch} />
      <Sidebar dispatch={dispatch} isSidebarOpen={state.isSidebarOpen} isFetching={state.isFetching} />
      <MainContent state={state} dispatch={dispatch} />
      {state.requestLimitErrorText !== '' && (
        <RequestLimitError dispatch={dispatch} requestLimitErrorText={state.requestLimitErrorText} />
      )}
      <Footer />
    </div>
  )
}

export default App