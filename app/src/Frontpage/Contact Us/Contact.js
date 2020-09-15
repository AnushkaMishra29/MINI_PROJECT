import React  from 'react'
import './contact.css'
import axios from 'axios'


class Contact extends React.Component{
   
    state={
        orderForm:{
            name:{
                label:'Name',
                elementType:'input',
                elementConfig:{
                    type:'text',
                },
                error:'Name is Required',
                validation:{
                  required:true,
                  
                },
                valid:false,
                value:'',
                touched:false
            },
            email:{
                label:'Email',
                elementType:'input',
                elementConfig:{
                    type:'email',
                },
                error:' Valid Email is Required',
                validation:{
                  required:true,
                  ajax:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
                },
                valid:false,
                value:'',
                touched:false
            },
            
            query:{
                label:'Query',
                elementType:'textarea',
                elementConfig:{
                    type:'text',
                },
                error:'Query of Min 100 Letter is Required',
                validation:{
                  required:true,
                  minlength:100
                             
                },
                valid:false,
                value:'',
                touched:false
            },
     } 
    }
    Checkvalidation=(value,rules)=>
    {
         let isValid=true;
         if(rules.required)
         {              
           isValid=value.trim()!=='' && isValid ;
         }
         if(rules.ajax)
         {
            
            
         }
         if(rules.minlength)
         {
           isValid=value.trim().length>=rules.minlength && isValid;
         }
         return isValid
    }
    inputchangheHandler=(event,id)=>
    {
       const UpdatedForm={...this.state.orderForm};
       const updatedElement={...this.state.orderForm[id]}
       updatedElement.value=event.target.value;
       updatedElement.valid=this.Checkvalidation(event.target.value,updatedElement.validation)
       UpdatedForm[id]=updatedElement;
       this.setState({orderForm:UpdatedForm})
       
    } 
    touched=(id)=>
   {
    const UpdatedForm={...this.state.orderForm};
    const updatedElement={...this.state.orderForm[id]}
    updatedElement.touched=true;
    UpdatedForm[id]=updatedElement;
    console.log(UpdatedForm)
    this.setState({orderForm:UpdatedForm})
   }
   submit=(event)=>
   {
    event.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:this.state.orderForm.name.value,email:this.state.orderForm.email.value,query:this.state.orderForm.query.value})
    };
      fetch('http://localhost:8080/contact_us', requestOptions)
        .then(response => 
            {
            
        }
        )
        .catch(error=>
            {
                console.log(error)
            })
        
   }

    render(){
        let Array=[];
         for(let key in this.state.orderForm)
         {
            Array.push({id:key,config:this.state.orderForm[key]} )
         }
        return(
            <div className='contact background'>
               <div className="center font padding">
                    <div className="underline">
                     Drop a Mail
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                       <div className="form-padding">
                        <form onSubmit={(event)=>this.submit(event)}>
                            { 
                            Array.map((element)=>
                            { 
                                if(element.config.elementType=='input')
                                {
                                    return(
                                        <div key={element.id}>
                                         <div>
                                             <label>{element.config.label}</label>
                                         </div>
                                         <div>
                                            <input
                                             value={element.config.value} 
                                              onClick={
                                              ()=>this.touched(element.id)} 
                                              onChange={
                                              (event)=>this.inputchangheHandler(event,element.id)    
                                              }             
                                              className={(!element.config.touched||element.config.valid)?null:"invalid"}
                                              type={element.config.elementConfig.type}>
                                            </input>
                                         </div>
                                          <div>
                                          <span 
                                          className={(!element.config.touched||element.config.valid)?"opacity":"error"}
                                         >{element.config.error}
                                         </span>
                                          </div>
                                         </div>
                                    )
                                }
                                else{
                                    return (
                                    <div key={element.id}>
                                        <div>
                                             <label>{element.config.label}</label>
                                         </div>
                                         <div>
                                             <textarea
                                              value={element.config.value} 
                                              onClick={
                                              ()=>this.touched(element.id)} 
                                              onChange={
                                              (event)=>this.inputchangheHandler(event,element.id)    
                                                }
                                              className={(!element.config.touched||element.config.valid)?null:"invalid"}
                                              type={element.config.elementConfig.type}></textarea>
                                         </div>
                                          <div>
                                         <span 
                                          className={(!element.config.touched||element.config.valid)?"opacity":"error"}
                                         >{element.config.error}
                                         </span>
                                          </div>
                                    </div>
                                    )
                                }
                              }
                             )
                            } 
                            <button type="submit">submit</button>
                        </form>
                       </div>
                    </div>
                    <div class ="col-md-6 center">
                        <img src='/assets/email.png'></img>
                    </div>
                </div>

            </div>
        )
    }
    
}
export default Contact;
