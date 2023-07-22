import { useState } from 'react'
import './App.scss'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'

function App() {


  return (
    <div className="app">
      <AppHeader />
      <AppFooter />
    </div>
  )
}

export default App
