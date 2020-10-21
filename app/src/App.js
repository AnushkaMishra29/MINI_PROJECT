import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frontpage from './Frontpage/Frontpage'
import Login from './Login/login'
import Signup from './Signup/signup'
import orginization from './organization/organization'
import Government from './governmentSchool/body'
import Loader from './Loader/loader'
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'





function App() {
  return (
   <div className="row">
     <Loader></Loader>
     <BrowserRouter>
      <Switch>
       <Route path={'/'} exact component={Frontpage}></Route>
       <Route path={'/login'} exaxt component={Login}></Route>
       <Route path={'/signup'} exact  component={Signup}></Route>
       <Route path={'/orginization'} exact component={orginization}></Route>
       <Route path={'/government_schools'} exact component={Government}></Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;