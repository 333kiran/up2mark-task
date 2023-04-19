import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Form from './components/form';
import Records from './components/records';
import View from './components/view';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Form/>}/>
      <Route exact path="/records" element={<Records/>}/>
      <Route exact path="/view" element={<View/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
