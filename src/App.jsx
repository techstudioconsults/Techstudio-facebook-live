import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

//constants
import { Loading, ErrPage } from './constants'

//pages
import HomePage from './pages/home'

function App() {
  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path='*' element={<ErrPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
