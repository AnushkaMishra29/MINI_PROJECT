import React from 'react'

const CONTACT_US=(name,email,query)=>
{    console.log(JSON.stringify({name:name,email:email,query:query}))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,email:email,query:query})
    };
      fetch('http://localhost:8080/contact_us', requestOptions)
        .then(response => 
            {   
                console.log(response.json()) 
            }
            )
        .catch(error=>
            {
                console.log(error)
            })
}

export {CONTACT_US}