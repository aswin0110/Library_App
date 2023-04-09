const express = require('express')
const cors = require('cors')
const logger = require('morgan')



const app = new express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

PORT = 3000

require('./middlewares/mongoDB')

// API CALLING
const api= require('./routers/api')
app.use('/api', api)



const jwt = require('jsonwebtoken')



// authentication
app.post('/auth', async (req,res)=>{

    
        
    try {
        let {email,password}= req.body
        console.log(email,password);
        console.log(req.body);

        if (email =='aswin@gmail.com' && password == '123456789'){
        
            let paylod = { email:email , password:password }
            let token = jwt.sign(paylod,'12545845asdasdaf2144141')
            console.log(token); 




            res.status(200).json({message:'success!',status:200, token:token})
        }
        else{
            throw('unautharised')
        }
    } catch (error) {
        console.log(error);
    res.status(400).json({message:error})
        
    }


})












app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})