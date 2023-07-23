import { useState } from 'react'
import './App.scss'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import AppRoutes from './Contexts/RouteContext'
import IO from './Contexts/IOContext'

function App() {

  return (
    <div className="app">
      <IO>
        <AppRoutes>
          <AppHeader />
        </AppRoutes>
      </IO>

      <AppFooter />
    </div>
  )
}

export default App
