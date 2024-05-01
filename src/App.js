// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './HomePage/HomePage';
import Message from './Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth.action';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt= localStorage.getItem("jwt");
  
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[jwt])

  return (
    
      <div className="">
        <Routes>
          <Route path='/*' element={auth.user?<HomePage/>: <Authentication />} />
          <Route path='/message' element={<Message />} />
          <Route path='/*' element={<Authentication />} />
        </Routes>
      </div>
   
  );
}

export default App;
