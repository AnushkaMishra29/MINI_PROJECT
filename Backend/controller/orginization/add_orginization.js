const organization = require('../../models/organization')

exports.register=(req,res,next)=>
{   console.log('hello')
    if(!req.file)
    {
          console.log('not found')
    }
    console.log(new Date().toISOString())
}