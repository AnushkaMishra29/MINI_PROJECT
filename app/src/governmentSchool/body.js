import React,{Component, component} from 'react'
import './body.css'
import Navbar from'../Navbar/Navbar'
import Child from './govtSchoolitem/body'
import { connect } from 'react-redux'
import * as actionTypes from '../store/action'
class Body extends Component{
    componentDidMount()
    {
        this.props.changeLoader()
    }
    render()
    {   
        console.log(this.props.ctr);
        return (
            <div className="govt">
                <Navbar></Navbar>
                <div className="layer"></div>
                <div className="upper">
                  <div className="name1">
                        <span className="rotate">G</span>
                        <span>O</span>
                        <span>V</span>
                        <span>E</span>
                        <span>R</span>
                        <span>N</span>
                        <span>M</span>
                        <span>E</span>
                        <span>N</span>
                        <span>T</span>
                  </div>
                  <div className="name2">
                        <span>S</span>
                        <span>C</span>
                        <span>H</span>
                        <span>O</span>
                        <span>O</span>
                        <span>L</span>
                        <span>S</span>
                  </div>
                </div>
                <div className="bg">
                {this.props.ctr.map(order=>(
                   <Child element={order}></Child>
                ))}
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        ctr:state.goveSchools
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        changeLoader:()=>dispatch({type:actionTypes.SCHOOLS}),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Body);