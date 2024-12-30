import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layouts.jsx'
import 'flowbite';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import MainLayout from "../src/components/DashboardLayout";
import AdminHome from './pages/adminHome.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path='/admin' element={<MainLayout />}>
            <Route index element={<AdminHome />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
