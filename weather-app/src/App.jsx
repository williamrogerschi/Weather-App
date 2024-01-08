import React from 'react'
import Main from '../src/components/Main/Main'
import Toggle from '../src/components/Toggle/Toggle'
import useLocalStorage from 'use-local-storage'
import './App.css'

function App() {
 
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useLocalStorage('isDark', defaultDark)


  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <Main />
    </div>
  )
}

export default App
