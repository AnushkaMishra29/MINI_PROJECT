import React,{Component, component} from 'react'
import Pagination from 'react-bootstrap/Pagination'
class Orginization extends Component{
     
    formdata=new FormData();
    inputchangheHandler=(event)=>
    {
        this.formdata.append('image',event.target.files[0])
        console.log(event.target.files[0])
    }
    submit()
    {   
        const requestOptions = {
            method: 'POST',
            body: this.formdata
        };
           fetch('http://localhost:8080/orginization', requestOptions)
           .then(()=>
           {
               console.log('send')
           })
    }
    render()
    {
        return (
            <div>
              <from >
                 <input
                  onChange={
                    (event)=>this.inputchangheHandler(event)    
                    } 
                 type="file"></input>
                 <button onClick={(event)=>this.submit(event)}>submit</button>
              </from>
            </div>
        )
    }
}
export default Orginization