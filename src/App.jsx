import './App.css'

import Menu from './components/Menu'

import { Box } from '@mui/material'

import Home from './pages/Home'
import About from './pages/About'
import Safety from './pages/Safety'
import Membership from './pages/Membership'
import Bylaws from './pages/Bylaws'
import Field from './pages/Field'


import { Route, Routes } from 'react-router-dom'

function App() {
  // Use the box component to make the page full height and width
  // This is also has a router to handle the different pages
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Menu />
      <Box sx={{ height: 'auto', width: '100%', boxSizing: 'border-box' }} flexGrow={1} padding={1} >
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/safety" exact element={<Safety />} />
          <Route path="/membership" exact element={<Membership />} />
          <Route path="/bylaws" exact element={<Bylaws />} />
          <Route path="/field" exact element={<Field />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
