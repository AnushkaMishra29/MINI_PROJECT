import React  from 'react'
import './contact.css'



class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullName: "",
            email: "",
            query: "",
        };
    }
    
  
    render(){
        return(
            <div className='background'>
                <div className='contact'>
                    <div className='main'>DROP A MAIL</div>
                </div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className='Name'>
                        
                        <div className='one'>Name</div>
                        <label htmlFor="Name"> </label>
                        <input type='text' name='Name' value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                        
                    </div>
                    <div className='email'>
                      
                        <div className='two'>Email</div>
                        <label htmlFor="email"></label>
                        <input type='email' name='email' value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                        
                    </div>
                    <div className='query'>
                        <div className='three'>Query</div>
                        <label htmlFor="text"></label>
                        <textarea name='query' maxLength='250' value={this.state.query} onChange={this.onQueryChange.bind(this)}  ></textarea>
                        
                    </div>
                    <div className='submit'>
                    <button type='submit'>Submit</button>
                    </div>
                </form>

            </div>
        )
    }
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
    onQueryChange(event) {
      this.setState({query: event.target.value})
    }
    handleSubmit(event) {
    }
}
export default Contact;
