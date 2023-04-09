const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aswinkannur1:Aswinkannur01@cluster0.amfjccq.mongodb.net/EmployeeAPP?retryWrites=true&w=majority',{
    useNewUrlPARSER:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('..........MongoDB connected successfully.......... ');
}).catch((error)=>{
    console.log(error.message);
})