const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
const compression = require('compression')
const app = express();

const multer=require('multer');
const helmet = require("helmet");
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>
    {
        cb(null,'./images')
    },
    filename:(req,file,cb)=>
    {    
        cb(null,file.originalname)
    }
});   
const fileFilter=(req,file,cb)=>
    {
       if(file.mimetype === 'image/png'||
         file.mimetype === 'image/jpg'||
         file.mimetype === 'image/jpeg')
         {
          cb(null,true);   
         }
         else
         {
          cb(null,false);
         }
    };

const contactUs=require('./routes/contact-us')
const auth=require('./routes/auth')
const otp=require('./routes/otp-varification')
const organization=require('./routes/organization/add_orginization')

app.use(helmet());
app.use(compression());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();  
})

app.use(bodyParser.json());
app.use(multer
    ({storage:fileStorage,fileFilter:fileFilter}).single('file')
    )
app.use('/images',express.static(path.join(__dirname,'./images')));
app.use(contactUs);
app.use(auth);
app.use(otp);
app.use(organization);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data =error.data;
    res.status(status).json({message:message,data:data});
})
console.log(process.env.mongo);
mongoose.connect(process.env.mongo)
.then(()=>
{
    console.log("connected");
})

.then((result)=>
{
    app.listen(process.env.PORT||8080);
})
.catch(err=>
{
    console.log(err);
    next(err);
})