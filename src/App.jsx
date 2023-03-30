
import './scss/App.css'
import Header from './components/header/Header'
//import Register from './components/Register'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  
  return (
    <div className="App">
     <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    <Home />
     <Footer/>   
    </div>
  )
}

export default App
