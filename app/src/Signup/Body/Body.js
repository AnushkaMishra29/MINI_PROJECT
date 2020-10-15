import React,{Component, component} from 'react'
import './Body.css'
class Body extends Component{
    state={
        orderForm:{ 
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
            
            password:{
                label:'Password',
                elementType:'input',
                elementConfig:{
                    type:'text',
                },
                error:'Enter Your Password',
                validation:{
                  required:true,
                  check:'confirm_password'        
                },
                valid:false,
                value:'',
                touched:false,
               
            },
            confirm_password:{
                label:'Confirm Password',
                elementType:'input',
                elementConfig:{
                    type:'text',
                },
                error:'Password dose not match' ,
                validation:{
                  checkwith:'password'          
                },
                valid:false,
                value:'',
                touched:false,
                
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
            isValid=value.trim().match(rules.ajax) && isValid ;
         }
         if(rules.minlength)
         {
           isValid=value.trim().length>=rules.minlength && isValid;
         }
         if(rules.checkwith)
         {   console.log('checkin')
             console.log(this.state.orderForm[rules.checkwith].value)
             isValid=(value.trim()==(this.state.orderForm[rules.checkwith].value))&&isValid
         }
         return isValid
    }
    inputchangheHandler=(event,id)=>
    {  
       let UpdatedForm={...this.state.orderForm};
       let updatedElement={...this.state.orderForm[id]}
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
    this.setState({orderForm:UpdatedForm})
   }
   submit=(event)=>
   {
     this.props.changeLoader()
    event.preventDefault();
      
   }
    render()
    {   let Array=[];
        
        for(let key in this.state.orderForm)
        {
           Array.push({id:key,config:this.state.orderForm[key]} )
        }
        return (
            <div className="signup"> 
                <div className="background">
                    <div className="row">
                    <div className="head-display head center">
                                GET YOURSELF REGISTER
                            </div>
                        <div  className="col-lg-6 center remove">
                        <img  className="images display" src='/assets/signup.svg'></img>
                        </div>
                        <div className="col-lg-6">
                            <div className="head-display2 head center">
                                GET YOURSELF REGISTER
                            </div>
                        <div className="form-padding">  
                        <form onSubmit={(event)=>this.submit(event)}>
                            { 
                            Array.map((element)=>
                            { 
                                
                                    return(
                                        <div key={element.id}>
                                         <div className="label-padding">
                                             <label>{element.config.label}</label>
                                         </div>
                                         <div className="form-center">
                                            <input 
                                             value={element.config.value} 
                                              onClick={
                                              ()=>this.touched(element.id)} 
                                              onChange={
                                              (event)=>this.inputchangheHandler(event,element.id)    
                                              }             
                                              className={(!element.config.touched||element.config.valid)?null:"invalid"}
                                             >
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
                                
                              
                             )
                            } 
                            <button className="btn-4" type="submit">submit</button>
                        </form>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body