import React from 'react'
import { Sidebar, Main } from './components'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <ContextProvider>
      <Sidebar/>
      <Main/>
    </ContextProvider>
  )
}

export default App