import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
/*
import reactLogo from './assets/react.svg'
<img width="60px" src="/vite.svg" className="logo" alt="Vite logo" />
<img src={reactLogo} className="logo react" alt="React logo" />
*/

function App() {

  return (
    <Router>
      <p>Navbar</p>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
