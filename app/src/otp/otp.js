import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import {Otp} from "../store/ServerService"
import './otp.css'
import { Form } from "react-bootstrap";
class otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ""
    };
    this.onchange = this.onchange.bind(this);
  }
  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // performVerify = async event => {
  //   event.preventDefault();

  //   var data = {
  //     emailid: this.props.location.state.email,
  //     otp: this.state.otp
  //   };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   };
  //   const url = "/api/verifyemail";
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //     if (result.data === "verified") {
  //       return <Redirect to="/dashboard/" />;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  performVerify = async event => {
    console.log(event)
    event.preventDefault();
    console.log(this.state.otp)
    Otp(this.state.otp).then(response=>
      {
        console.log(response.json());
      })
  }
  render() {
    return (
        <div className="otp">
            <div className="bckgrnd">
              <div className='head'>Enter OTP</div>
              <div>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter the digits"
                  onChange={this.onchange}
                />
                <br />
                <button className="btn-4" type="submit" onClick={event => this.performVerify(event)}>
                  Submit
                </button>
                <hr />

              </div>

            </div>
              
            
        </div>
          
    );
  }
}
export default withRouter(otp);

