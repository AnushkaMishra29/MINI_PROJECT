import React from 'react';
import './Wedo.css';
class Wedo extends React.Component {
    state = {
        para: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum, ipsum as it is sometime  print, graphic or web designs",
        Images: [
            "/assets/image2.jpg",
            "/assets/image1.png"
        ]


    }
    render() {
        return ( 
             <div className = "wedo">
             <div className="web">   
            <div className = "letter" ></div> 
            <div className="row" >
            <div className = "col-md-8 col-sm-12 font2" >
            <div className="heading">WHAT WE DO</div>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum,
            ipsum as it is sometime print, graphic or web designs 
            </div> 
            <div className = "col-md-4 col-sm-12" >
             <img src={this.state.Images[1]}></img>
            </div> 
            </div> 
            </div>
            <div className="mobile">   
            <div className="heading">WHAT WE DO</div>
            <div className="row">
                <div className="col-12">
                <img src = {this.state.Images[1]}/>
                </div>
                <div className="col-12 font2">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs Lorem ipsum,
            ipsum as it is sometime print, graphic or web designs 
                </div>
            </div>
            </div>
            </div>

        )
    }
}
export default Wedo;