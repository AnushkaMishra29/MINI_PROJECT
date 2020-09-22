import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frontpage from './Frontpage/Frontpage'
import Login from './Login/login'
import Signup from './Signup/signup'

import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import loader from './Loader/loader'





function App() {
  return (
   <div>
     <BrowserRouter>
     <switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/login'}  component={Login}></Route>
       <Route path={'/signup'}  component={Signup}></Route>
      </switch>
     </BrowserRouter>

     </div>
  );
}

export default App;