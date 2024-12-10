import './App.css'
import { Router,Routes,Route } from 'react-router'
import Layout from './layouts/layouts.jsx'



function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Layout />}>
                    
              </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
