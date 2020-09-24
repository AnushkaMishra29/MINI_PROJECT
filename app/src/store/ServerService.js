
import * as actionTypes from './action';

const CONTACT_US=(name,email,query)=>
{    
    console.log(JSON.stringify({name:name,email:email,query:query}))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,email:email,query:query})
    };
      return fetch('http://localhost:8080/contact_us', requestOptions)
        
}

export {CONTACT_US}