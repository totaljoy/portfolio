import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="page">
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
