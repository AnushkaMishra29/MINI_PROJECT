import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frontpage from './Frontpage/Frontpage'
import Login from './Login/login'
import Signup from './Signup/signup'
import orginization from './organization/organization'
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'





function App() {
  return (
   <div className="row">
     <BrowserRouter>
      <switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/login'} exaxt component={Login}></Route>
       <Route path={'/signup'} exact  component={Signup}></Route>
       <Route path={'/orginization'} exact component={orginization}></Route>
      </switch>
     </BrowserRouter>
    </div>
  );
}

export default App;