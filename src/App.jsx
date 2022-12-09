import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import Nav from './components/nav/Nav'
import Footer from './components/Footer'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App