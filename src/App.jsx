import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './Pages/Landingpage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App