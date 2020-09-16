import React,{Component, component} from 'react'
import './Body.css'
class Body extends Component{
    render()
    {
        return (
            <div className="login"> 
                <div className="background">
                    <div className="row">
                        <div className="col-md-6">
                        <img className="images" src='/assets/login.svg'></img>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body