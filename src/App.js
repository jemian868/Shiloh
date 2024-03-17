import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import pages from './pages/Index'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className='main-container'>
        <Navigation />
        
        <div className='route-container'>
          <Routes>
            {
              pages.map((item,key) => {
                return  <Route path={item.path} key={key} element={<item.element />} />
              })
            }
          </Routes>
        </div>
    </div>
  );
}

export default App;
