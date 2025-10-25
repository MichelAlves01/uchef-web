import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Recipe from './pages/recipe/recipe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/recipes' element={<Recipe />}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
