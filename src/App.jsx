import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"

import Home from "./pages/Home"

function App() {
  return (
    <div className='bg-yellow-300 min-h-screen'>
    <HashRouter>
      <Header />
      <main className='p-6'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      </main>
    </HashRouter>
    </div>
  )
}

export default App
