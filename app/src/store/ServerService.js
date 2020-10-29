
const base_url="http://localhost:8080";
const CONTACT_US=(name,email,query)=>
{    
    console.log(JSON.stringify({name:name,email:email,query:query}))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,email:email,query:query})
    };
      return fetch(base_url+'/contact_us', requestOptions)
        
}
const Signup=(name,email,password)=>
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name,email,password})
    };
      return fetch(base_url+'/signup', requestOptions)
}
const getOrginization=()=>
{
    const requestOptions = {
        method: 'GET',
    };
      return fetch(base_url+'/get-orginization', requestOptions)
}
const Otp=(otp)=>
{   console.log(JSON.stringify({otp}))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'Authorization':localStorage.getItem('token')},
        body:JSON.stringify({otp})
    };
    return fetch(base_url+'/otpVerification', requestOptions)
}
export {CONTACT_US,Signup,getOrginization,Otp}