import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import HomePage from './pages/Home/HomePage.jsx';

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/dashboard' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
    </Routes>
  </Router>
)


const App = () => {
  return <div>{routes}</div>

}

export default App