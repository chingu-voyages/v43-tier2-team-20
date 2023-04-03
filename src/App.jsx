
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import './scss/App.css'
import Graph from './components/chart/Graph'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <div >
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
    </Router>
   <Graph/>
    
     <Footer/>
    </div>
  )
}

export default App
