import { useState } from 'react'
import './App.scss'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import AppRoutes from './Contexts/RouteContext'

function App() {

  return (
    <div className="app">
      <AppRoutes>
        <AppHeader />
      </AppRoutes>
      <AppFooter />
    </div>
  )
}

export default App
