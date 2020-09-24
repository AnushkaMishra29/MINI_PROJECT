import React,{Component} from 'react';
import Contact_US from './Contact Us/Contact'
import Landing from './Landing/Landing'
import Search from './Search/Search'
import Wedo from './What we do/Wedo'
import Navbar from '../Navbar/Navbar'
import Loader from '../Loader/loader'
class Frontpage extends Component{
   render()
   {
       return (
        <div>
         
         <Navbar></Navbar>
         <Landing></Landing>
         <Search></Search>
         <Wedo></Wedo>
         <Contact_US></Contact_US>
         <Loader></Loader>
         </div>

       )
   }
}
export default Frontpage