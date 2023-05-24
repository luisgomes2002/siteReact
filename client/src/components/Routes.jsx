import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import JapaneseHome from './pages/japanese/JapaneseHome';
import Jlpt from './pages/japanese/jlpt/Jlpt';
import Register from './login/Register';
import Login from './login/LoginPage';
import UserPage from './user/User';

function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/japanese' element={<JapaneseHome />} />
      <Route path='/jlpt' element={<Jlpt />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userPage' element={<UserPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}

export default Router





