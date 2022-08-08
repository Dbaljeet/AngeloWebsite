import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import Navbar from './components/Navbar';
import HungerBar from '../src/components/hungerBar'
import Options from './components/Options';
import { ThemeProvider } from './Context/ThemeContext';
/*
import reactLogo from './assets/react.svg'
<img width="60px" src="/vite.svg" className="logo" alt="Vite logo" />
<img src={reactLogo} className="logo react" alt="React logo" />
*/

function App() {

  return (
    <Router>
      <ThemeProvider>
        <Navbar/>
        <Options/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </ThemeProvider>
      <HungerBar/>
    </Router>
  )
}

export default App
