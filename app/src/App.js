import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frontpage from './Frontpage/Frontpage'
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'





function App() {
  return (
   <div>
   
     <BrowserRouter>
     <switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/login'} exact component={Frontpage}></Route>

     </switch>
     </BrowserRouter>
     </div>
  );
}

export default App;