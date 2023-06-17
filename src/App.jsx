import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homePage/homePage'
import { SearchPage } from './pages/searchPage/searchPage'
import { NavBar } from './components/navBar/navBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </div>
  )
}

export default App
