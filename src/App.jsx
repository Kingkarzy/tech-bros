import React from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import Nav from './components/nav/Nav'
import Header from './components/header/Header'

const App = () => {
  return (
    <>
        <Nav />
        <p>Hello World</p>
        <Header />
    </>
  )
}

export default App