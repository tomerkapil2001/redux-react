import React from 'react'
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import './App.css';
import Navbar from './component/Navbar';
import User from './component/User';
import Filter from './component/Filter';
import Contactus from './component/Contactus';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
// import Page404 from './component/Page404';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='/*' element={<Navigate to="/"/>}/>
      <Route path='/User/:name' element={<User/>}/>
      <Route path='/Filter' element={<Filter/>}/>
      <Route path='/contact/' element={<Contactus/>}/> 
        <Route path='/Company' element={<Company/>}/>
        <Route path='/Channel' element={<Channel/>}/>
        <Route path='/Other' element={<Other/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
