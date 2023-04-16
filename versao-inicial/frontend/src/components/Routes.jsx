import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import JapaneseHome from './pages/japanese/JapaneseHome';

function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/japanese' element={<JapaneseHome />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  )
}

export default Router




