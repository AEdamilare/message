import React from 'react'
import Text from './pay'
import Home from './home'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/message/' element={<Home />} />
      <Route path='/message/pay' element={<Text />} />
    </Routes>
    
  )
}

export default App